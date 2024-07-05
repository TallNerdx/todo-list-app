// app.js
document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');

    function addTodo() {
        const text = newTodoInput.value.trim();
        if (!text) return;

        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('click', toggleCompleted);
        todoList.appendChild(li);

        // Clear the input after adding a todo
        newTodoInput.value = '';
    }

    function toggleCompleted(e) {
        e.target.classList.toggle('completed');
    }

    // Add event listener to the input field for submitting new todos
    newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
