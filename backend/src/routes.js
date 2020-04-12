const router = require('express').Router();
const multer = require("multer")
const multerConfig = require("./middlewares/multer")
const auth = require('./middlewares/auth')
const { isPrimary, isAdmin } = require('./middlewares/role')
const controllerpay = require('./controllers/pay')
const controllerProducts = require('./controllers/products')
const controllerAdmin = require('./controllers/admin')
const controllerPurchased = require('./controllers/purchased')



//List Products
router.get('/products', controllerProducts.index)
//Index a Product home
router.get('/products/home', controllerProducts.index_home)
//Create Products
router.post('/products', auth, isPrimary, multer(multerConfig).single('file'), controllerProducts.store)
//Update Product
router.put('/products/:id', auth, isPrimary, multer(multerConfig).single('file'), controllerProducts.update)
//Show a Product
router.get('/products/:id', controllerProducts.show)
//Show a Product page
router.get('/products/page/:page', controllerProducts.show_pages)
//Delete Product
router.delete('/products/:id', auth, isPrimary, controllerProducts.destroy)
//Delete all Products
router.delete('/deleteall/products', auth, isPrimary, controllerProducts.destroyAll)
//Products registered
router.get('/all/products', auth, controllerProducts.count)


//Purchased
//list purchased
router.get('/purchased', auth, isAdmin, controllerPurchased.index)
//create purchased
router.post('/purchased', controllerPurchased.store)
//delete purchased
router.delete('/purchased/:id', auth, isAdmin, controllerPurchased.destroy)
//delete all purchased
router.delete('/all/purchased', auth, isAdmin, controllerPurchased.detroyAll)
//count purchased
router.get('/purchased/all', auth, isAdmin, controllerPurchased.count)


//create Admin
router.post('/admin', auth, isPrimary, controllerAdmin.store)
//list Admin
router.get('/admin', auth, isPrimary, controllerAdmin.index)
//Show Admin
router.get('/admin/show/:id', auth, isPrimary, controllerAdmin.show)
//Delte Admin
router.delete('/admin/:id', auth, isPrimary, controllerAdmin.destroy)
//Delte all Admins
router.delete('/deleteall/admin', auth, isPrimary, controllerAdmin.destroyAll)
//Update Admin Primary and Secondary
router.put('/admin/update', auth, isAdmin, controllerAdmin.update)
//Update Admin accsess
router.put('/admin/access/:id', auth, isPrimary, controllerAdmin.update_access)
//Admin registered
router.get('/all/admin', auth, isPrimary, controllerAdmin.count)

//auth login
router.post('/login', controllerAdmin.login)
//load user
router.get('/admin/load', auth, isAdmin, controllerAdmin.load)
router.get('/admin/load/primary', auth, isPrimary, controllerAdmin.loadPrimary)

//Pay
//Mercado Pago
router.post('/mercado_pago', controllerpay.mercadopago)

module.exports = app => app.use('/api', router)