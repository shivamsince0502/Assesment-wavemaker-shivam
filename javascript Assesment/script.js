const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')
var totalTask = 0;
var completedTask = 0;
function clickButton(e) {
    e.preventDefault()
    addTodo()
}

let taskList = []


// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    itemall.appendChild(item)

    if (inputtdl.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)
    listtdl.appendChild(itemall)
    inputtdl.value = ''
    totalTask++;
    document.getElementById('totalTask').innerHTML = totalTask;
    document.getElementById('activeTask').innerHTML = totalTask;
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target
    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
        completedTask++;
        document.getElementById('activeTask').innerHTML = totalTask - completedTask;
        if(completedTask <= totalTask)
            document.getElementById('compTask').innerHTML = completedTask;
        if((totalTask - completedTask) < 0) {
            document.getElementById('activeTask').innerHTML = 0;
        }
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
        totalTask--;
        document.getElementById('totalTask').innerHTML = totalTask;
        if(totalTask === 0) 
            document.getElementById(completedTask).innerHTML = 0;
    }
}
buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)

