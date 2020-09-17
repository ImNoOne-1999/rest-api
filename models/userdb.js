const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Username field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    userValid: {
        type: Boolean,
        default: true
    }
});

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
        required: [true, 'Login field is required']
    },
    deviceValid: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model('user',UserSchema);
const DeviceFetcher = mongoose.model('deviceFetcher',DeviceSchema);

module.exports = User;
module.exports = DeviceFetcher;