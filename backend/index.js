import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js'; 
import connectDB from './lib/connectDB.js';


dotenv.config();

const app = express();

// console.log('Hello World');
// console.log(process.env.test);

// app.get("/test", (req, res) => {
//     res.status(200).send("Hello World");
// });
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.listen(3000, () => {
    connectDB();
    console.log(process.env.test);

    console.log('Server is running on port 3000');
});
