window.onload = function () {
    document.getElementById("txt").focus();
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
        
        <input type="checkbox" id="myCheckbox" onclick="checkBoxClick()" class="checkBox"/> 
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





    // for (var i=0; i<checkbox.length; i++){
    //     checkbox[i].onclick = function() {
    //         title[i].classList.toggle('checked');
    //     }
    // }

    // Add a "checked" symbol when clicking on a list item
    // var checkbox = document.querySelector('.checkBox');
    // checkbox.addEventListener('click', function(ev) {
    // if (ev.target. === 'checkBox') {
    //     ev.target.classList.toggle('checked');
    // }
    // }, false);

}

function checkBoxClick() {
    var checkbox = document.querySelectorAll("#myCheckbox");
    var title = document.querySelectorAll(".title");
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].unchecked != false) {
            title[i].classList.toggle("checked");
        }
        
    }
}