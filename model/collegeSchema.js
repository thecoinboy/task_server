import mongoose from 'mongoose'

const CollegeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

export const College = mongoose.model("College", CollegeSchema);
