require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
var path = require('path');


const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

exports.getObject = () => {
    var bucketParams = {
        Bucket: bucketName
    };

    s3.listObjects(bucketParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });

    return "media object returned from the slave object/media store (read-only replicas)";
}
exports.setObject = () => {

    var uploadParams = { Bucket: bucketName, Key: '', Body: '' };
    var fileStream = fs.createReadStream(process.env.TEST_FILE_NAME);
    fileStream.on('error', function(err) {
        console.log('File Error', err);
    });
    uploadParams.Body = fileStream;
    uploadParams.Key = path.basename(process.env.TEST_FILE_NAME);
    s3.upload(uploadParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        }
        if (data) {
            console.log("Upload Success", data.Location);
        }
    });

    return "Media object written to the master Object store";
}