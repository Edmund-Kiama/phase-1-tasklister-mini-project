document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.querySelector('form');

  newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const toDo = e.target.querySelector('#new-task-description').value 
    buildToDo(toDo);
    newTaskForm.reset();
  })
});

  function buildToDo(newToDo){
    const task = document.createElement('li');
    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'x';
    task.textContent = newToDo;
    task.appendChild(deleteButton);
    document.querySelector('#tasks').appendChild(task);
  
    deleteButton.addEventListener('click', handleDelete);
  }

  function handleDelete(e){
    e.target.parentNode.remove();
  }
