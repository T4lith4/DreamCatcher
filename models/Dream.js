const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Create Schema 
const DreamSchema = ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Dream = mongoose.model('dream', DreamSchema);