import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import songRouter from './src/routes/songRoutes.js';
import  connectdb  from './src/config/mongodb.js';
import   connectCloudinary  from './src/config/cloudinary.js';

dotenv.config();
connectdb();
connectCloudinary();



const port = process.env.PORT || 4000;  // Changed from 'port' to 'PORT' (standard convention)
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎵 Welcome to Echozy Backend API');
});
app.get('/ping', (req, res) => {
  res.send('✅ Server is alive');
});

app.use("/api/songs", songRouter);  // Changed to plural "/api/songs" (REST convention)

app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

app.listen(port, () => console.log(`Server running on port ${port}`));