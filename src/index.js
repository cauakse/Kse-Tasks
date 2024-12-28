import express from 'express'
import path from 'node:path'
import router from './routes.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:true}))


app.use(router);

app.listen(PORT,()=>{
    console.log(`Servidor iniciado"\n
Rodando em http://localhost:${PORT}/`);
    
})

export default app;