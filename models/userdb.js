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



const User = mongoose.model('user',UserSchema);

module.exports = User;