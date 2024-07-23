function createProject (title){
    
    let toDoList = [];
    const getCurrentList = () => toDoList;
    const addToDo = (todo) => {
        toDoList.push(todo); 
    }

    const removeToDo = (indexOfToDo) => {
        toDoList.splice(+indexOfToDo, 1);
    }

    return {title, addToDo, removeToDo, getCurrentList}
}

export{createProject}


