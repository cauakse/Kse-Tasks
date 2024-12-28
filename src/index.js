import express from 'express'
import path from 'node:path'
import router from './routes.js'

const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', "ejs");
app.set('views', path.join(process.argv[1].replace("index.js",""),'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))


app.use(router);

app.listen(PORT,()=>{
    console.log(`Servidor iniciado"\n
Rodando em http://localhost:${PORT}/`);
    
})