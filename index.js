import express from 'express';
import connectToDatabase from './database/connection.js';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import classesRoutes from './routes/classes.routes.js';
import fileRoutes from './routes/files.routes.js';
import withdrawalRoutes from './routes/withdrawal.routes.js';

dotenv.config(); // Load environment variables at the very top

// console.log('Environment Variables:', process.env); // Log all environment variables to debug

const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api', classesRoutes);
app.use('/api', fileRoutes);
app.use('/api', withdrawalRoutes);



app.listen(3000, () => {
  console.log("Server running on port 3000");
  connectToDatabase();
});
 