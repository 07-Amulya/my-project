function addTask() {
    let task = document.getElementById("task").ariaValueMax;
    let li = document.createElement("li")
    li.innerText = task;
    document.getElementById("list").appendChild(li);
}