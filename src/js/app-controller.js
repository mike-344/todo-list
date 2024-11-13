import { createToDoItem } from "./todo-item";
import { createProject } from "./project";
import { createProjectLibrary } from "./project-library";



function appController() {
  //Default project to store uncategorized ToDo's
  const miscProject = createProject("Misc");

  //Stores all user created projects
  const projectLibrary = createProjectLibrary();

  //prob need to revise this
  const getProjectLibrary = () => {
    return projectLibrary.getCurrentLibrary();
  };

  let activeProject = miscProject;

  //the screen controller will pass the class value of the target clicked
  const setActiveProject = (indexOfProject) => {
    if (indexOfProject == "Misc") {
      activeProject = miscProject;
    } else {
      let currentList = projectLibrary.getCurrentLibrary();
      activeProject = currentList[+indexOfProject];
    }
  };

  const getActiveProject = () => activeProject;

  const createNewToDo = (title, description, dueDate, priority) => {
    getActiveProject().addToDo(
      createToDoItem(title, description, dueDate, priority)
    );
  };
  //not sure this is being used
  const getProjectTodoList = (project) => {
    return project.getCurrentList();
  };

  const createNewProject = (title) => {
    projectLibrary.addProjectToLibrary(createProject(title));
  };

  const editTodo = () => {
    
  }

  return {
    setActiveProject,
    getActiveProject,
    createNewToDo,
    getProjectTodoList,
    getProjectLibrary,
    createNewProject,
  };
}

export { appController };
