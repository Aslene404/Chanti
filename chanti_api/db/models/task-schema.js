const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const bcrypt = require('bcrypt');
const saltRounds = 10;




//Define a schema
const Schema = mongoose.Schema;

/**
 * Task Schema
 */
const TaskSchema = new Schema({
    taskname: {
        type: String,
        trim: true,
        required: [true, 'task name is required']
    },
    sdate:{
		type: Date,
		trim: true,
		required :[true, 'sdate is required'],
		default : Date.now
	},
	fdate:{
		type: Date,
		trim: true,
		required :[true, 'fdate is required']
		
	},
	staff: { 
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    
	
    
});






module.exports = mongoose.model('Task', TaskSchema);