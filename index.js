import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url";
import rootRoutes from './routes/root.js';

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, '/public')))


//routes
app.use('/', rootRoutes)



app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))