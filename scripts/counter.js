// Counter todos

import {getData} from "./storageApi.js";

function counterTodo() {
    const counter = getData().length
    document.getElementById("all-todos").innerHTML = `All: ${counter}`
}

function counterCompleted() {
    const completedTodos = getData().filter(todo => todo.isChecked === true).length
    document.getElementById("completed-todo").innerHTML = `Completed: ${completedTodos}`
}

export {counterTodo,counterCompleted}