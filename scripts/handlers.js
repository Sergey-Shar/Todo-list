// Header button functionality

import { render} from "./main.js";
import {setData, getData} from "./storageApi.js";
import {TodoStorage} from "./Todo.js";

function onBtnDeleteAll() {
    document.querySelector("main").innerHTML = "";
    setData([])
    render([])
}

function onBtnDeleteLast() {
    const lastCard = document.querySelector("main").lastElementChild
    const data = getData().filter((todo) => todo.id != lastCard.id)
    setData(data)
    render(data)
}

function onSortTodos() {
    const completedTodos = getData().filter(todo => todo.isChecked === true)
    render(completedTodos)
}

function onSearch(event) {
    if (event.code === "Enter") {
        const input = document.getElementById("search")
        const checkText = getData().filter(todo => todo.text === input.value)
        render(checkText)
    } else if (event.code === "Escape") {
        const data = getData()
        render(data)
        const input = document.getElementById("search")
        input.value = ""
    }
}

function onSearchClick(){
    const input = document.getElementById("search")
    const btn = document.getElementById("btn-search")
    const checkText = getData().filter(todo => todo.text === input.value)
    render(checkText)
    input.value = ""
    btn.className = 'search-btn fas fa-times'
    btn.id = "search-reset"
    input.placeholder = "cancel"
}

function onSearchReset() {
    const btn = document.getElementById("search-reset")
    const input = document.getElementById("search")
    const data = getData()
    render(data)
    btn.className = 'search-btn'
    btn.id = "btn-search"
    input.placeholder = "search"
}

function onBtnAddCard() {
    const input = document.querySelector("textarea")
    const date = new Date().toLocaleDateString();
    const data = getData()
    const todoStorage = new TodoStorage(Math.random(), date, input.value);
    data.push(todoStorage);
    setData(data);
    render(data)
    input.value = "";
  }

export {onBtnDeleteAll,onSortTodos, onSearch, onBtnDeleteLast, onBtnAddCard,onSearchClick,onSearchReset}
