import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))//FOR AVOIDING CORS

app.use(express.json({limit:"20kb"}))//FOR ACCEPTING JSON CODE
app.use(express.urlencoded())// FOR ACCEPTING URLS
app.use(express.static("public"))//FOR ACCEPTING IMAGES ETC

export default app