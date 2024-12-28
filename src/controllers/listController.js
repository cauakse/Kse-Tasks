import listModel from '../models/listModel.js';

const listController = {
    'index' : (req,res)=>{
        const lists = listModel.getAllList();
        res.render('taskList',{lists})
    },
    'create' :  (req,res)=>{
        res.render('createList')
    },
    'createNew' : (req,res)=>{
        const {name} = req.body;
        const list = listModel.createList(name);
        listModel.saveList(list);
        res.redirect('/viewList');
    },
    "viewTask": (req,res)=>{
        const id = req.params.id;
        const list = listModel.getListById(id)[0];
        res.render('oneList.ejs',{ list });
    },
    'createNewTask' : (req,res)=>{
        const id = req.params.id;
        const {taskName} = req.body;
        listModel.createNewTask(id,taskName);
        res.redirect('/viewTasks/' + id);
    },
    'concludeTask' : (req,res)=>{
        const id = req.params.id;
        const index = req.params.index;

        listModel.concludeTask(id,index);
        const list = listModel.getListById(id)[0];
        res.render('oneList.ejs', {list});
    },
    'deleteTask' : (req,res)=>{
        const id = req.params.id;
        const index = req.params.index;
        listModel.deleteTask(id,index);
        const list = listModel.getListById(id)[0];
        res.render('oneList.ejs', {list});
    }
}

export default listController;