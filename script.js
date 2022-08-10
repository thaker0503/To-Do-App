window.onload = function () {
    document.getElementById("txt").focus();
    window.addEventListener('load', checkAll, false);
}
$(document).keypress(function (e) {
    if (e.which == 13) {
        $("#btn").click();
    }
});



function addItem() {
    if (document.querySelector('#txt').value != "") {
        document.querySelector('.lii').innerHTML +=
            `<div class='list'> 
        
        <input type="checkbox" onclick="checkBoxClick()" class="checkBox myCheckbox"/> 
        <span class="todo-description"> 
            <span class="title"> ${document.querySelector('#txt').value}</span> 
            <span id="displayDate">${new Date().toLocaleString()}</span> 
        </span>  
        <i id="del" class="fa-solid fa-trash-can fa-xs close"></i> `;

        document.querySelector('#txt').value = "";
    }
    else {
        alert("Enter something to Add!");
        document.getElementById('#txt').focus();
    }

    var current_tasks = document.querySelectorAll(".close");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }

}

function checkBoxClick() {
    var checkbox = document.querySelectorAll(".myCheckbox");
    var title = document.querySelectorAll(".title");
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked != false) {
            title[i].classList.toggle("checked");
        }
        else if(checkbox[i].unchecked != false){
            if(title[i].classList.contains("checked")){
                title[i].classList.remove("checked");
            }

        }
        
        
    }
}