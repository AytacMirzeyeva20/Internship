let tasks=[];
const todo=document.getElementById("todo-list");
const progress=document.getElementById("progress-list");
const done=document.getElementById("done-list");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
function renderTasks() {
todo.textContent="";
progress.textContent="";
done.textContent="";
tasks.forEach(task=>{
const card = document.createElement("div");
card.className = "task";
const title = document.createElement("p");
title.textContent = task.title;
card.appendChild(title);
if (task.status === "todo") {
    todo.appendChild(card);
} else if (task.status === "progress") {
    progress.appendChild(card);
} else if (task.status === "done") {
    done.appendChild(card);
}
})
}
const addbutton=document.getElementById("add-btn");
addbutton.addEventListener('click',()=>{
const title=taskInput.value.trim();
if(title===""){
    alert("Metnin ici bosdur.")
    return;
}
 tasks.push({
        id: Date.now(),
        title: title,
        status: "todo"
    });

    taskInput.value = "";

    renderTasks();
})
