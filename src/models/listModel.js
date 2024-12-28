let lists = [{id:1,name:"Casa",tasks:[],createAt:new Date()}]

const listModel = {
    getAllList(){
        return lists
    },
    getListById(id){
        return lists.filter(list => list.id == id);
    },
    createList(name){
        const list = {
            'id' : Date.now().toString(),
            'name': name,
            'tasks' : [],
            'createdAt': new Date()
        }

        return list;
    },
    saveList(list){
        lists.unshift(list);
    },
    getTasks(id){
        return lists.filter(list=> list.id == id).tasks;
    }
    ,
    deleteList(id){
        lists = lists.filter(list => list.id != id)
    },
    concludeTask(id,taskIndex){
       const index = lists.findIndex(list=>list.id == id);
       lists[index].tasks[taskIndex].status=true;
    },
    createNewTask(id,taskName){
        const index = lists.findIndex(list=>list.id == id);
        lists[index].tasks.unshift({name:taskName,status:false});
    },
    deleteTask(id,taskIndex){
        const index = lists.findIndex(list=>list.id == id);
        lists[index].tasks.splice(taskIndex,1)
    }
}

export default listModel;