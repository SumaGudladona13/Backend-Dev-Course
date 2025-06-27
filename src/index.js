import dotenv from "dotenv"
import connectDB from "./db/index.js"

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is ready at port ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log('MongoDB connection FAILED!!!',error);
    
})




















/*
import express from 'express'

const app=express()

( async()=>{
    try 
    {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log('ERRR: ',error);
            throw error
        })
        app.listen(()=>{
            console.log(`App listening on port ${process.env.PORT}`);
            
        })
        
    } 
    catch (error) 
    {
        console.error('ERROR: ',error)
    }
} )()
 */
