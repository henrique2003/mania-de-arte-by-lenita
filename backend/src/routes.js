const router = require('express').Router();
const multer = require("multer");
const multerConfig = require("./middlewares/multer");
const controllerProducts = require('./controllers/products');
const controllerAdmin = require('./controllers/admin');
const auth = require('./middlewares/auth');
const authRole = require('./middlewares/role');
const pay = require('./controllers/pay')


//List Products with paginate
router.get('/products', controllerProducts.index)
//Index a Product home
router.get('/products/home', controllerProducts.index_home)
//Create Products
router.post('/products', auth, authRole.isPrimary, multer(multerConfig).single('file'), controllerProducts.store)
//Update Product
router.put('/products/:id', auth, authRole.isPrimary, multer(multerConfig).single('file'), controllerProducts.update)
//Show a Product
router.get('/products/:id', controllerProducts.show)
//Show a Product page
router.get('/products/page/:page', controllerProducts.show_pages)
//Delete Product
router.delete('/products/:id', auth, authRole.isPrimary, controllerProducts.destroy)
//Delete all Products
router.delete('/deleteall/products', auth, authRole.isPrimary, controllerProducts.destroyAll)
//Products registered
router.get('/all/products/', auth, controllerProducts.count)


//create Admin
router.post('/admin', auth, authRole.isPrimary, controllerAdmin.store)
//list Admin
router.get('/admin', auth, authRole.isPrimary, controllerAdmin.index)
//Show Admin
router.get('/admin/:id', auth, authRole.isPrimary, controllerAdmin.show)
//Delte Admin
router.delete('/admin/:id', auth, authRole.isPrimary, controllerAdmin.destroy)
//Delte all Admins
router.delete('/deleteall/admin', auth, authRole.isPrimary, controllerAdmin.destroyAll)
//Update Admin
router.put('/admin/update', auth, authRole.isSecondary || authRole.isPrimary, controllerAdmin.update)
//Update Admin accsess
router.put('/admin/:id', auth, authRole.isPrimary, controllerAdmin.update_access)
//Admin registered
router.get('/all/admin/', auth, authRole.isPrimary, controllerAdmin.allAdmin)

//auth login
router.post('/auth', controllerAdmin.auth)

//Pay
//Mercado Pago
router.post('/mercado_pago', pay.mercadopago)

module.exports = app => app.use('/api', router)