"use strict";

import {createContainer,createHeader,createMain,createCard} from "./templates.js";
import {setData,getData} from "./storageApi.js";
import {counterTodo,counterCompleted} from "./counter.js";
import {onBtnDeleteAll,onBtnDeleteLast,onSortTodos,onSearch,onBtnAddCard} from "./handlers.js";

// App

document.addEventListener("DOMContentLoaded", app);
document.addEventListener("keydown",onSearch);

function app() {
  const root = document.getElementById("root");
  root.className = " h-screen overflow-scroll bg-cover  pt-28  md:pt-48 md:bg-auto  ";
  const header = createHeader();
  header.addEventListener("click", onHeader);
  const main = createMain();
  const container = createContainer();
  container.append(header, main);
  render(getData());
}

// Event Listener

function addCardEventListener(item) {
  item.addEventListener("click", onCardHandlers);
}

function onHeader(event) {
  const {target} = event;
  if (target.id === "btn-delete") {
    onBtnDeleteAll();
  } else if (target.id === "btn-add") {
    onBtnAddCard();
  } else if (target.id === "btn-delete-last") {
    onBtnDeleteLast()
  } else if (target.id === "btn-sort") {
    onSortTodos()
  }  else if (target.id === "btn-search"){
    onSearchClick()
  } else if (target.id === "search-reset"){
    onSearchReset()
  }
}

function onCardHandlers(event) {
  let {target} = event;
  if (target.type === "checkbox") {
    const data = getData().filter((todo) => {
      if (todo.id == this.id) {
        todo.isChecked = target.checked;
      }
      return todo;
    });
    setData(data);
    render(data)
  } else if (target.id === "delete-card") {
    target.parentElement.remove();
    const data = getData().filter((todo) => todo.id != this.id);
    setData(data);
    render(data)
  }
}

// render todos 

function render(data) {
  document.querySelector("main").innerHTML = " ";
  data.map((todo) => {
    const card = createCard(todo.text, todo.date, todo.isChecked);
    card.id = todo.id
    addCardEventListener(card);
    document.querySelector("main").append(card);
  });
  counterTodo()
  counterCompleted()
}

export {render}
