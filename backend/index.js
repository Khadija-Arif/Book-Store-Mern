import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors"; // Add this line
import {Book} from './models/bookModel.js';
import bookRoute from './routes/bookRoutes.js'
const app = express();
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/',(request,response) =>{
    console.log(request)
    return response.status(234).send('Welcome to MERN STACK TUTORIAL')
})
app.use('/books', bookRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log(`App connected to database`);
    app.listen(PORT,()=>{
        console.log(`App is litening to port: ${PORT}`)
    });
})
.catch((error) =>{
console.log(error);

})
