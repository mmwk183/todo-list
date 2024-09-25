const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

loadTasks();


form.addEventListener('submit', function(e) {

    e.preventDefault();
    const task = taskInput.value.trim();

    if (task === '') return;

    addTask(task);
    saveTaskToLocalStorage(task); 
    taskInput.value = ''; 

});

        // make a new list item
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;


        // add comp btn to the task
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.style.marginLeft = '10px';
    li.appendChild(completeBtn)

        //adding edit btn
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.marginLeft = '10px';
    li.appendChild(editBtn);

        //adding delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value='';

    //comp event listener
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    
    });

    //edit event listener
    editBtn.addEventListener('click', function(){
        const newTask = prompt("Edit your task:", li.firstChild.textContent);
        if (newTask) {
            li.firstChild.textContent = newTask;
        }
    })

    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(li);
        removeTaskFromLocalStorage(task);


    });



}

//Load from local storage

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
}

// save to local
function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//update in local storage
function updateTaskInLocalStorage(oldTask, newTask) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.indexOf(oldTask);
    if (taskIndex !== -1) {
        tasks[taskIndex] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

//Remove from local storage
function removeTaskFromLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}