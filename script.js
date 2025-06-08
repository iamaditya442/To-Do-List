let textValue = document.getElementById("taskInput");
let btnClick = document.getElementById("addTaskBtn");
let delBtn = document.createElement("span");
delBtn.innerText="X";

btnClick.addEventListener("click", function(){
    let boxText = textValue.value;

    let listItem = document.createElement("li");
    listItem.innerText=boxText;

    let finalItem = document.getElementById("taskList");
    finalItem.append(listItem);

    textValue.value="";

    delBtn.addEventListener("click", function(e){
        listItem.remove();
    });

    listItem.appendChild(delBtn);

});