const PORT = 5000
const url = "Paste your connection string"
import mongoose from 'mongoose'
import express from "express"
const app = express()
mongoose.connect(url,{
    useNewUrlParser:"true",
    useFindAndModify:"false",
    useUnifiedTopology:"true",
    useCreateIndex: "true",
    
}).then(()=>{

    app.listen(PORT,()=>{
        console.log(`Connection Successfully established`)
        console.log(`Server is running at ${PORT}`)
    })
}).catch(error=>{
    console.log('Error:',error.message)
})
export default app

