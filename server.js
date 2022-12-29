import { app } from './app.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({path:'./config.env'})

const PORT = process.env.PORT || 4000
mongoose.set({strictQuery:false})
mongoose.connect('mongodb+srv://coinboy:P7WIz4EgjhoI9kip@cluster0.grecw9q.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then((res) =>{ console.log(res)}).catch((err)=>{ console.log(err)})

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})
