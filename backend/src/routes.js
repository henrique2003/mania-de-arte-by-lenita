const router = require('express').Router();
const multer = require("multer");
const multerConfig = require("./middlewares/multer");
const controllerProducts = require('./controllers/products');
const controllerAdmin = require('./controllers/admin');
const auth = require('./middlewares/auth');
const authRole = require('./middlewares/role');


//List Products with paginate
router.get('/products', controllerProducts.index);
//Create Products
router.post('/products', auth, authRole.isPrimary, multer(multerConfig).single('file'), controllerProducts.store);
//Update Product
router.put('/products/:id', auth, authRole.isPrimary, multer(multerConfig).single('file'), controllerProducts.update);
//Show a Product
router.get('/products/:title', controllerProducts.show);
//Delete Product
router.delete('/products/:id', auth, authRole.isPrimary, controllerProducts.destroy);
//Delete all Products
router.delete('/deleteall/products', auth, authRole.isPrimary, controllerProducts.destroyAll);
//Products registered
router.get('/all/products/', auth, controllerProducts.allProducts);


//create Admin
router.post('/admin', auth, authRole.isPrimary, controllerAdmin.store);
//list Admin
router.get('/admin', auth, authRole.isPrimary, controllerAdmin.index);
//Update Admin
router.put('/admin/:id', auth, authRole.isPrimary, controllerAdmin.update);
//Delte Admin
router.delete('/admin/:id', auth, authRole.isPrimary, controllerAdmin.destroy);
//Delte all Admins
router.delete('/deleteall/admin', auth, authRole.isPrimary, controllerAdmin.destroyAll);
//Show Admin
router.get('/admin/:id', auth, authRole.isPrimary, controllerAdmin.show);
//Admin registered
router.get('/all/admin/', auth, authRole.isPrimary, controllerAdmin.allAdmin);

//auth login
router.post('/auth', controllerAdmin.auth);

module.exports = app => app.use('/api', router);