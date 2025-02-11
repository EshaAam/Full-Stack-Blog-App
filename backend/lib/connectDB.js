import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('MongoDB is connected');
    } catch (err) {
        console.error('Initial connection error:', err);
    }

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
};

export default connectDB;