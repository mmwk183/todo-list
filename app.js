const form = document.getElementById('todo-form');
const task = document.getElementById('task-input');
const list = document.getElementById('task-list');


form.addEventListener('submit', function(e) {

    e.preventDefault();
    const task = taskInput.value;

    const li = document.createElement('li');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value='';

    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(li);

    });


});
