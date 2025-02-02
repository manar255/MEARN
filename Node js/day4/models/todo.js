const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    },
    status: {
        type: String,
        required: true,
        default: 'new',
        enum: ['new', 'in-progress', 'done']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });


module.exports = mongoose.model('Todo', todoSchema);
