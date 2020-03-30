const { Products, Admin } = require('../models');
const { success, serverError, badRequest, notFound, dateNow, destroyImage } = require('../utils')
const fs = require('fs');

module.exports = {
    async index(req, res) {
        try {
            const { page = 1 } = req.query;

            const products = await Products.paginate({}, { page, limit: 10 });

            return success(res, products)
        }
        catch (error) {
            return serverError(res, error, 'read products')
        }
    },

    async store(req, res) {
        try {
            const { title, cost, description, role } = req.body;

            //Valid image
            if (!req.file)
                return badRequest(res, 'Image required')

            const { originalname: name, size: size, filename: key } = req.file;

            //Valid if product exists
            if (await Products.findOne({ title })) {
                if (fs.existsSync(`tmp/uploads/${key}`)) {
                    await fs.unlinkSync(`tmp/uploads/${key}`);
                }

                return badRequest(res, "product already exists")
            }

            let produtcBody = {
                title,
                cost,
                description,
                role,
                image: {
                    name,
                    size,
                    key
                }
            };

            const products = await Products.create(produtcBody);

            return success(res, products)
        }
        catch (error) {
            return serverError(res, error, 'create products')
        }
    },

    async update(req, res) {
        try {
            const { title, cost, description, role } = req.body;
            const { id } = req.params

            const lastProduct = await Products.findById(id)

            //Valid if product exist
            if (!lastProduct) {
                if (req.file) {
                    await destroyImage(req.file)
                }
                return notFound(res, "Product not found")
            }

            //Valid if have a repeat product
            if (lastProduct.title === title) {
                if (req.file) {
                    await destroyImage(req.file)
                }
                return badRequest(res, "product already exists")
            }

            let productBody = {};
            let image = {}

            //Update Image
            if (req.file) {
                const { originalname: name, size: size, filename: key } = req.file;

                if (fs.existsSync(`tmp/uploads/${lastProduct.image.key}`)) {
                    fs.unlinkSync(`tmp/uploads/${lastProduct.image.key}`);
                }

                image = {
                    name,
                    size,
                    key
                }

                productBody.image = image;
            }


            let user = await Admin.findById(req.userId)
            console.log()
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

            return success(res, products)
        }
        catch (error) {
            await destroyImage(req.file)
            return serverError(res, error, 'update products')
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params
                
            const product = await Products.findOne(id);

            if (!product) {
                return notFound(res, "product not found");
            }
            
            return success(res, product)
        }
        catch (error) {
            return serverError(res, error, 'show products')
        }
    },

    async destroy(req, res) {
        try {
            const { id } = req.params

            let lastProduct = await Products.findById(id);

            if (!lastProduct)
                return notFound(res, "Products not Found")

            if (fs.existsSync(`tmp/uploads/${lastProduct.image.key}`)) {
                fs.unlinkSync(`tmp/uploads/${lastProduct.image.key}`);
            }

            await Products.findByIdAndRemove(req.params.id);

            return success(res, "Deletado com sucesso")
        } catch (error) {
            return serverError(res, error, 'destroy products')
        }
    },

    async destroyAll(req, res) {
        try {
            let products = await Products.find({});
            products.map((product) => (
                fs.existsSync(`tmp/uploads/${product.image.key}`) ? fs.unlinkSync(`tmp/uploads/${product.image.key}`) : ""
            ));

            await Products.remove({});

            return success(res, "Deletado com sucesso")
        } catch (error) {
            return serverError(res, error, 'destroy all products')
        }
    },

    async allProducts(req, res) {
        try {
            const products = await Products.find({}).select("_id");

            return success(res, products)
        }
        catch (error) {
            return serverError(res, error, 'destroy in all products')
        }
    }
}