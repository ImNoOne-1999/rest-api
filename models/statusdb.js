const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
    macId: {
        type: String,
        required: [true, 'MacId is required']
    },
    statusCode: {
        type: Boolean,
        default: false
    },
    statusTime: {
        type: String,
        required: [true, 'status field is required']
    }
});

const Status = mongoose.model('status',StatusSchema);

module.exports = Status;