var objectStoreService = require('../../../objectStorage/objectStoreAccessService')

exports.upload = (req, res, next) => {
    res.status(200).send('writing media (image, video...): ' + objectStoreService.setObject());
}