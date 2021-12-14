var objectStoreService = require('../../../objectStorage/objectStoreAccessService')

// module.exports = downloadService;
exports.download = (req, res, next) => {
    res.status(200).send('getting media (image, video...): ' + objectStoreService.getObject());
}