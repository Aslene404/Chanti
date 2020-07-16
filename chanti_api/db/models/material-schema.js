const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const bcrypt = require('bcrypt');
const saltRounds = 10;




//Define a schema
const Schema = mongoose.Schema;

/**
 * Material Schema
 */
const MaterialSchema = new Schema({
    materialname: {
        type: String,
        trim: true,
        required: [true, 'material name is required']
    },
	quantity: {
        type: Number,
        trim: true,
        required: [true, 'material quantity is required']
    },
	unitprice: {
        type: Number,
        trim: true,
        required: [true, 'material unitprice is required']
    }
    
    
});






module.exports = mongoose.model('Material', MaterialSchema);