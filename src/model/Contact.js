const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Contact', ContactSchema);