import {createToDoItem} from "./todo-item"
import {createProject} from './project'
import {createProjectLibrary} from './project-library'


//I suppose this should control the flow and state of 

function appController(){
    //Default project to store uncategorized ToDo's
    const miscProject = createProject("misc");
    
    //Stores all user created projects
    const projectLibrary = createProjectLibrary();

    


    let activeProject = miscProject;

    //the screen controller will pass the class value of the target clicked
    const setActiveProject = (indexOfProject) => {
        if (indexOfProject === "misc"){
            activeProject = miscProject;
        } else {
        activeProject = projectLibrary[+indexOfProject];
        }
    }

    const getActiveProject = () => activeProject;

    
    const createNewToDo = (title, description, dueDate, priority)=>{
        getActiveProject().addToDo(createToDoItem(title, description, dueDate, priority));

    }

    return {setActiveProject, getActiveProject, createNewToDo}


}

export {appController}