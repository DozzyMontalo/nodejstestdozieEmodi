const mongoose = require("mongoose");

const wardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    id: {
        type: Number,
        default: 0,
        required: true,
    },

    stateid: {
        type: Number,
        default: 0,
        required: true,
    },

    tokens: [{
        token: {
            type: String,
            required: true,
        },
    }, ],
}, {
    timestamps: true,
});

const wards = mongoose.model("Ward", wardSchema);

module.exports = wards;