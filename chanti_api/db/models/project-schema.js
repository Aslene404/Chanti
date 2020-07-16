const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const bcrypt = require('bcrypt');
const saltRounds = 10;




//Define a schema
const Schema = mongoose.Schema;

/**
 * Project Schema
 */
const ProjectSchema = new Schema({
    projectname: {
        type: String,
        trim: true,
        required: [true, 'project name is required']
    },
    owner:{
		type: String,
		trim: true,
		required :[true, 'owner is required']
	},
    status: {
        type: String,
        trim: true,
        required: [true, 'status is required'],
		default: 'in progress'
    },
	task: { 
        type: Schema.Types.ObjectId,
        ref: "Task"
    },
	material: { 
        type: Schema.Types.ObjectId,
        ref: "Material"
    },
	staff: { 
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    
});






module.exports = mongoose.model('Project', ProjectSchema);