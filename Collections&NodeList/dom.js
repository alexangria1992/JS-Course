// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById('todo-list')
// const todoNr = document.getElementsByClassName('todo-nr')[0]

// const newItem = document.createElement("li")
// newItem.classList.add('item')
// newItem.innterText = "Item 3";

// const anotherItem = document.createElement("li")
// anotherItem.classList.add('item')
// anotherItem.innterText = "Item 4";

// todoList.appendChild(newItem)
// todoList.appendChild(anotherItem)

// todoNr.innerText = collectionItems.length

// console.log(collectionItems)

const todoList = document.querySelector('#todo-list')
const items = todoList.children
console.log(items)
const todoNr = document.querySelector('.todo-nr')

const newItem = document.createElement("li")
newItem.classList.add('item')
newItem.innterText = "Item 3";


const anotherItem = document.createElement("li")
anotherItem.classList.add('item')
anotherItem.innterText = "Item 4";

todoList.appendChild(anotherItem)
todoList.appendChild(newItem)

todoNr.innerText = items.length

console.log(items)


