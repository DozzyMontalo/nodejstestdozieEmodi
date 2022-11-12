const mongoose = require("mongoose");

const lgaSchema = new mongoose.Schema({
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

const lgas = mongoose.model("LGA", lgaSchema);

module.exports = lgas;