import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'
const issueSchema = mongoose.Schema({
    projectname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:Number,
        required:true
    },
    // lastupdated:{
    //     type : Date, 
    //     default: Date.now,
    // },
    // added:{
    //     type : Date, 
    //     default: Date.now,
    // },
}, {timestamps: {createdAt: 'added', updatedAt: 'lastupdated'}})
autoIncrement.initialize(mongoose.connection)
issueSchema.plugin(autoIncrement.plugin,'issue')
const issue =  mongoose.model('issue',issueSchema)
export default issue
