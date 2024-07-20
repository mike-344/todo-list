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
    const description = document.querySelector("#due-date");
    const dueDate = document.querySelector("#description");
    //prob need nodelist, also maybe give a value attribute for buttons, or consider radio/checkboxes
    //const priority

    const submitNewToDo = document.querySelector(".submit-new-todo");
    submitNewToDo.addEventListener("click", () => {
        const newToDo = app.createNewToDo()
    })



}

export {screenController}