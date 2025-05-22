"use strict"

function addTask(){
    const input = document.getElementById("taskInput");
    const taskText=input.ariaValueMax.trim();

    if(taskText !== ""){
        const li=document.createElement("li");
        li.innerHTML=`
        <span onclick="toggleComplete(this,${taskText})">${taskText}</span>
        <div class="task-buttons">
        <button onclick="deleteTask(this)">Eliminar</button>
        </div>
        `;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
    console.log(tasks);

}

function deleteTask(btn){
    btn.closest("li").remove();
    for(let i=0;i<tasks.length;i++){
        
    }
}
function toggleComplete(span){
    span.classList.toggle("task-complete");
}