const { Products, Admin } = require('../models');
const { ok, serverError, notFound, badRequest } = require('http-server-res')
const { dateNow, destroyImage } = require('../utils')
const auth = require('../config/auth.json')
const fs = require('fs');

module.exports = {
    async index(req, res) {
        try {
            const { page = 1 } = req.query;

            const products = await Products.paginate({}, { page, limit: 10 })

            return ok(res, products)
        }
        catch (error) {
            console.log(error.message)
            return serverError(res, 'Server erro in read products')
        }
    },

    async index_home (req, res) {
        try {
            const product = await Products.find({}).sort({ field: 'asc', purchased: -1 }).limit(3)

            if(!product)
                return notFound(res, "Produtos não encontrados")

            return ok(res, product)
        } catch (error) {
            console.log(error.message)
            return serverError(res, "Server error in show_home")
        }
    },

    async store(req, res) {
        try {
            const { title, cost, description, role } = req.body;

            //Valid image
            if (!req.file)
                return badRequest(res, 'Campo imagem em branco')

            const { originalname: name, filename: key } = req.file;

            //Valid fields
            if (!title || !cost || !description || !role) {
                await destroyImage(key)
                return badRequest(res, "Campos em branco")
            }

            //Valid if product exists
            if (await Products.findOne({ title })) {
                await destroyImage(key)
                return badRequest(res, "Produto ja existe")
            }

            let produtcBody = {
                title,
                cost,
                description,
                role,
                image: {
                    name,
                    key
                }
            };

            const products = await Products.create(produtcBody);

            return ok(res, products)
        }
        catch (error) {
            console.log(error.message)
            return serverError(res, 'Server erro in create products')
        }
    },

    async update(req, res) {
        try {
            const { title, cost, description, role } = req.body;
            const { id } = req.params

            const lastProduct = await Products.findById(id)

            //Valid if product exist
            if (!lastProduct) {
                if (req.file) await destroyImage(req.file.filename)
                    return notFound(res, "Produto não encontrado")
            }

            //Valid if have a repeat product
            let titleRepeat = await Products.findOne({ title })
            if (titleRepeat) {
                if(titleRepeat.title === title) {

                }
                else {
                    if (req.file) await destroyImage(req.file.filename)
                    return badRequest(res, "Produto já existe")
                }
            }

            let productBody = {};
            let image = {}

            //Update Image
            if (req.file) {
                const { originalname: name, filename: key } = req.file;

                let filename = lastProduct.image.key
                await destroyImage(filename)

                image = {
                    name,
                    key
                }

                productBody.image = image;
            }


            let user = await Admin.findById(req.userId)
            let update = {
                name: user.name,
                date: dateNow()
            }

            if (title) productBody.title = title
            if (cost) productBody.cost = cost
            if (description) productBody.description = description
            if (role) productBody.role = role
            productBody.updateAt = update

            const products = await Products.findOneAndUpdate(
                {
                    _id: id
                },
                {
                    $set: productBody
                },
                {
                    upsert: true
                });

            return ok(res, products)
        }
        catch (error) {
            await destroyImage(req.file)
            console.log(error.message)
            return serverError(res, 'Server erro in update products')
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params

            const product = await Products.findById(id);

            if (!product)
                return notFound(res, "Produto não encontrado")

            return ok(res, product)
        }
        catch (error) {
            console.log(error.message)
            return serverError(res, 'show products')
        }
    },

    async show_pages (req, res) {
        try {
            const { page } = req.params

            let product = await Products.paginate({ role: page }, { limit: 10 })

            if(product.length === 0)
                return badRequest(res, `Produtos com da pagina ${page} não encontrado!`)

            return ok(res, product)
        } catch (error) {
            console.log(error.message)
            return serverError(res, "Server error in show_pages")
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params

            let lastProduct = await Products.findById(id);

            if (!lastProduct)
                return notFound(res, "Produto não encontrado")

            let filename = lastProduct.image.key
            await destroyImage(filename)

            await Products.findByIdAndRemove(req.params.id);

            return ok(res, "Deletado com sucesso")
        } catch (error) {
            return serverError(res, 'Server erro in destroy products')
        }
    },

    async destroyAll(req, res) {
        try {
            let products = await Products.find({});
            products.map((product) => (
                fs.existsSync(`${auth.productsDir}/${product.image.key}`) ? fs.unlinkSync(`${auth.productsDir}/${product.image.key}`) : ""
            ))

            await Products.remove({})

            return ok(res, "Deletado com sucesso")
        } catch (error) {
            console.log(error.message)
            return serverError(res, 'Server erro in destroy all products')
        }
    },

    async allProducts(req, res) {
        try {
            const products = await Products.find({}).select("_id");

            return ok(res, products)
        }
        catch (error) {
            console.log(error.message)
            return serverError(res, 'Server erro in all products')
        }
    }
}