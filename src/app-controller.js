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


    const setActiveProject = (indexOfProject) => {
        if (indexOfProject === "misc"){
            activeProject = "misc"
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