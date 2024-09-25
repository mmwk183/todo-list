const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


form.addEventListener('submit', function(e) {

    e.preventDefault();
    const task = taskInput.value;

        // make a new list item
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


    });


});
