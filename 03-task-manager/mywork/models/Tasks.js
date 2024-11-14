const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide the name'],
        trim: true,
        maxlength: [20, "name can not be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

