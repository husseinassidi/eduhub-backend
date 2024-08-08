import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    console.log(`Connecting to database with`);
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error('Failed to connect to database', error);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectToDatabase;
