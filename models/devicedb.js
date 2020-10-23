const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    macId: {
        type: String,
        required: [true, 'MacId is required']
    },
    authId: {
        type: String,
        required: [true, 'AuthId is required']
    },
    loginTime: {
        type: String,
        default: (new Date()).getHours() +':'+ (new Date()).getMinutes() +':'+ (new Date()).getSeconds()
    },
    deviceValid: {
        type: Boolean,
        default: true
    }
});

const DeviceFetcher = mongoose.model('deviceFetcher',DeviceSchema);
module.exports = DeviceFetcher;