// templates

// Creates DOM tree elements

function createElement(tag, className = "", text = "") {
  const element = document.createElement(tag);
  element.className = className;
  const elementText = document.createTextNode(text);
  element.append(elementText);
  return element;
}

//  Creates container of the entre app

function createContainer() {
  const container = createElement(
    "div",
    " md:container md:mx-auto  bg-gray-100 rounded-xl   text-lg md:text-xl text-indigo-500 shadow-2xl px-2 mx-4 border-2 border-white "
  );
  root.append(container);
  return container;
}

// Creates block header

function createHeader() {
  const header = createElement("header", " pt-2 text-gray-500 ");
  const upperRow = createUpperRow();
  const lowerRow = createLowerRow();
  header.append(upperRow, lowerRow);
  return header;
}

// Creates top row of buttons in header

function createUpperRow() {
  const upperRow = createElement(
    "div",
    " flex-wrap-reverse md: flex justify-around my-5 md:my-10 "
  );
  const buttonDeleteAll = createElement(
    "button",
    " border-2 border-gray-200 rounded-full bg-white  px-4 md:px-6 shadow-lg mb-2  ",
    "Delete All"
  );
  buttonDeleteAll.id = "btn-delete";
  const buttonDeleteLast = createElement(
    "button",
    " border-2 border-gray-200   rounded-full  bg-white  px-4 md:px-6 shadow-lg mb-2 ",
    "Delete Last"
  );
  buttonDeleteLast.id = "btn-delete-last";
  const textArea = createElement(
    "textarea",
    " w-1/2 border-2 border-white rounded-lg shadow-lg focus:outline-none mb-2  "
  );
  textArea.setAttribute("placeholder", "Enter todo...");
  const buttonAdd = createElement(
    "button",
    " border-2 border-gray-200  rounded-lg bg-white px-4 shadow-lg mb-2 ",
    "Add"
  );
  buttonAdd.id = "btn-add";
  upperRow.append(buttonDeleteAll, buttonDeleteLast, textArea, buttonAdd);
  return upperRow;
}

// Creates bottom row of buttons in header

function createLowerRow(all, completed = 0) {
  const lowerRow = createElement(
    "div",
    "flex-wrap-reverse md: flex justify-around my-5 md:my-10 "
  );
  const allTodos = createElement(
    "p",
    " border-2 border-gray-200  rounded-full bg-white px-4 md:px-6   shadow-lg mb-2  ",
    `All: ${all}`
  );
  allTodos.id = "all-todos";
  const completedTodos = createElement(
    "p",
    " border-2 border-gray-200  rounded-full bg-white px-4 md:px-6 shadow-lg mb-2  ",
    `Completed: ${completed}`
  );
  completedTodos.id = "completed-todo"
  const buttonSort = createElement(
    "button",
    " border-2 border-gray-200  rounded-full bg-white px-4 md:px-6  shadow-lg mb-2  ",
    "Sort completed"
  );
  buttonSort.id = "btn-sort"
  const searchContainer = createElement(
    "div","searchContainer  relative w-96"
  )
  const inputSearch = createElement(
    "input",
    " pl-10 cursor-pointer w-full md:w-1/2 border-2 border-white rounded-lg shadow-lg px-2  focus:outline-none  shadow-lg mb-2 "
  );
  const searchBtn = createElement(
    "button",
    " search-btn "
  );
  searchBtn.id = "btn-search"
  inputSearch.setAttribute("placeholder", "Search...");
  searchBtn.setAttribute("type","search")
  inputSearch.id = "search"
  searchContainer.append(inputSearch,searchBtn)
  lowerRow.append(allTodos, completedTodos, buttonSort, searchContainer);
  return lowerRow;
}
// Creates block main 

function createMain() {
  const main = createElement(
    "main",
    " grid justify-items-center mb-10 text-black "
  );
  return main;
}

// Creates todos cards

function createCard(text = "Description", date, isChecked) {
  const card = createElement(
    "section",
    " bg-blue-200 relative w-full md:w-2/3 px-5 h-40 py-8 mb-10 border-2 border-gray-300 rounded-xl shadow-lg "
  );
  const checkBox = createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = isChecked
  const taskDescription = createElement(
    "p",
    "border-2 border-gray-300 rounded-lg bg-gray-100 ",
    text
  );
  const buttonX = createElement(
    "button",
    " absolute top-0 right-0 mx-0.5 border-2 border-gray-300 rounded-lg bg-white px-2 ",
    "X"
  );
  buttonX.id = "delete-card";
  const currentDate = createElement(
    "p",
    " absolute bottom-0 right-0  border-gray-300 rounded-lg ",
    date
  );
  if (isChecked) {
    taskDescription.classList.add("line-through")
    card.classList.add("bg-blue-300")
  }
  card.append(checkBox, taskDescription, buttonX, currentDate);
  return card;
}

export {createElement,createContainer,createHeader,createUpperRow,createLowerRow,createMain,createCard,};
