import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const connectDB=async () => {
    try 
    {
       const connectionInstance=await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sumagudladona04:Suma123@cluster0.c1muj9l.mongodb.net')
       console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
       
    } 
    catch(error) 
    {
        console.error('ERROR: ',error)
        process.exit(1)
    }
}

export default connectDB