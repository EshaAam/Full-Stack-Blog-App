import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js'; 
import webhookRouter from './routes/webhook.route.js';
import connectDB from './lib/connectDB.js';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from 'cors';



dotenv.config();

const app = express();
//enabling cors for all requests by using middleware
app.use(cors(process.env.CLIENT_URL)); 
app.use(clerkMiddleware()); // use is for adding middleware
app.use("/webhooks", webhookRouter );
app.use(express.json()); // for parsing application/json



// console.log('Hello World');
// console.log(process.env.test);

// app.get("/auth-state", (req,res)=>{
//     const authState = req.auth;
//     res.json(authState);
// });

// app.get("/protect",(req,res)=>{
//     const {userId} = req.auth;
//     if(!userId){
//         return res.status(401).json({message: "Unauthorized"});
//     }
//     res.status(200).json({message: "Authorized"});
// });
// app.get("/protect2", requireAuth(), (req,res)=>{
//     res.status(200).json("content");
// });

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);


app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        message: error.message || 'An unknown error occurred!',
        status: error.status,
        stack: error.stack
    });
});

app.listen(3000, () => {
    connectDB();
    // console.log(process.env.test);

    console.log('Server is running on port 3000');
});
