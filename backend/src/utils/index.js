const dateNow = require('./dateNow')
const httpServer = require('./http-server')
const destroyImage = require('./destroyImage')

const { serverError, success, badRequest, notFound } = httpServer

module.exports = {
    dateNow,
    serverError,
    success,
    badRequest,
    notFound,
    destroyImage: destroyImage.destroyImage
}