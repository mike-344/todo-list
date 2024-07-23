import {appController} from './app-controller'

function screenController(){

    const app = appController();
    
    const newToDoButton = document.querySelector(".new-item-button");
    const newTodoModal = document.querySelector(".new-to-do-modal");
    newToDoButton.addEventListener("click", () => {
    newTodoModal.showModal();
})


    const newProjectButton = document.querySelector(".new-project-button");
    const newProjectModal = document.querySelector(".new-project-modal");
    newProjectButton.addEventListener("click", () => {
    newProjectModal.showModal();
})

    const title = document.querySelector("#title-input");
    const description = document.querySelector("#description");
    const dueDate = document.querySelector("#due-date");
    //const priorities = document.getElementsByName("priority")

    const submitNewToDo = document.querySelector(".submit-new-todo");
    submitNewToDo.addEventListener("click", (e) => {
      //  e.preventDefault();
        app.createNewToDo(title.value, description.value, dueDate.value, document.querySelector('input[name="priority"]:checked').value);
        displayTodoPreview();
        newTodoModal.close();
        
       console.log(app.getActiveProject());
    })


    const todoGrid = document.querySelector(".todo-grid");

    const displayTodoPreview = () => {
        let list = app.getActiveProject().getCurrentList();
        let currentItem = list[list.length - 1];
        let currentIndex = list.length - 1
        const wrapperDiv = document.createElement("div");
        wrapperDiv.setAttribute("name", currentIndex);
        const titleDiv = document.createElement("div");
        titleDiv.textContent=`Title: ${currentItem.title}`;
        const dueDiv = document.createElement("div");
        dueDiv.textContent=`Due date: ${currentItem.dueDate}`;
        wrapperDiv.appendChild(titleDiv);
        wrapperDiv.appendChild(dueDiv);
        wrapperDiv.appendChild(deleteTodo(currentIndex));
        todoGrid.appendChild(wrapperDiv);

    }
    
    const displayAllTodoPreview = () => {
        let list = app.getActiveProject().getCurrentList();
        list.forEach((todo) => {
            //
            let index = list.indexOf(todo);
            const wrapperDiv = document.createElement("div");
            const titleDiv = document.createElement("div");
            titleDiv.textContent=`Title: ${todo.title}`;
            const dueDiv = document.createElement("div");
            dueDiv.textContent=`Due date: ${todo.dueDate}`;
            wrapperDiv.appendChild(titleDiv);
            wrapperDiv.appendChild(dueDiv);
            wrapperDiv.appendChild(deleteTodo(index));
            todoGrid.appendChild(wrapperDiv);

        });
    };

    
    const submitNewProject = document.querySelector(".submit-new-project");
    const projectTitle = document.querySelector("#project-title");
   // const projectsGrid = document.querySelector(".generated-projects")
   const sidebarProjects = document.querySelector(".projects")
    submitNewProject.addEventListener("click", (e) => {
       app.createNewProject(projectTitle.value);
       displayProject();
       newProjectModal.close();
    })



    const displayProject = () => {
        const titleButton = document.createElement("button");
        const mainProjectLibrary = app.getProjectLibrary();
        const currentIndex = mainProjectLibrary.length-1;
        const currentProject = mainProjectLibrary[currentIndex];
        titleButton.textContent = currentProject.title;
        titleButton.setAttribute("name", currentIndex);
        titleButton.setAttribute("class", "projectButton");
        sidebarProjects.appendChild(titleButton);

    }


    const projectTitleDisplay = document.querySelector(".content h1");

    const projectTitleChange = () => {
        let titleProject = app.getActiveProject().title;
        projectTitleDisplay.textContent = titleProject;
        
    }

    const sidebarProjectButtons = document.querySelector(".projects");
    sidebarProjectButtons.addEventListener("click", (e) => {
        if (e.target.classList.contains("projectButton")){
           // while(todoGrid.firstChild){
          //      todoGrid.removeChild(todoGrid.firstChild);
          //  }
          todoGrid.innerHTML = ""
        }
        app.setActiveProject(e.target.getAttribute("name"));
        projectTitleChange();
        displayAllTodoPreview();
        
       console.log(app.getActiveProject())


    })
    
    const deleteTodo = (indexValue) => {
        const deleteTodoButton = document.createElement("button");
        deleteTodoButton.setAttribute('type', 'button');
        deleteTodoButton.textContent = "Delete";
        deleteTodoButton.addEventListener("click", (e) => {
            app.getActiveProject().removeToDo(indexValue);
            todoGrid.innerHTML = "";
            displayAllTodoPreview();
            
        })
        return deleteTodoButton;


    }
    

   


}

export {screenController}