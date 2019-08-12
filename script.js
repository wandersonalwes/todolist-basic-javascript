var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var textLink = document.createTextNode('');
        

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('class', 'delete');

        var pos = todos.indexOf(todo);
        
        linkElement.setAttribute('onclick', 'deleteTodos(' + pos + ')');

        listElement.appendChild(todoElement);
        todoElement.appendChild(todoText);

        todoElement.appendChild(linkElement);
        linkElement.appendChild(textLink);
    }
}
renderTodos();

function addTodos(){
    todoText =inputElement.value; 
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function deleteTodos(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addTodos;