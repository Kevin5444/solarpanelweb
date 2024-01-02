import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
router.get('/aboutus', function(req,res){
    res.sendFile(path.join(__dirname, '..', 'views', 'aboutus.html'));
});
router.get('/contactus', function(req,res){
    res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html'));
});




export default router