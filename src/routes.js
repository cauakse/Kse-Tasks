import express from 'express';
import listController from './controllers/listController.js'

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.get('/about', (req,res)=>{
    res.render('about');
})

router.get('/help', (req,res)=>{
    res.render('help');
})

router.get('/home', (req,res)=>{
    res.render('home');
})

router.get('/viewList', listController.index);

router.get('/createList',listController.create);

router.post('/createList', listController.createNew);

router.get("/viewTasks/:id", listController.viewTask);

router.post("/addTask/:id", listController.createNewTask);

router.post('/completeTask/:id/:index', listController.concludeTask);

router.post('/deleteTask/:id/:index', listController.deleteTask);

export default router;