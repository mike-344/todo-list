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




}

export {screenController}