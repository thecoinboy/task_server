import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    Rollnumber:{
        type:Number,
        unique:true
    },
    admissionDate:{
        type:Date,
        required:true

    },
    college:{
        type:String,
        required:true
    }
})

export const Student = mongoose.model("Student", StudentSchema);