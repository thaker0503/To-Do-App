window.onload = function () {
    document.getElementById("txt").focus();
    // window.addEventListener('load', checkAll, false);
}
$(document).keypress(function (e) {
    if (e.which == 13) {
        $("#btn").click();
    }
});

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


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
        // alert("Enter something to Add!");
        popUp()
        setTimeout(() => {
            popUp()
        }, 3000);
        
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
    var list = document.querySelectorAll(".list");
    var done = document.getElementById("lii-done");
    var todo = document.getElementById("todo");
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked != false) {
            title[i].classList.toggle("checked");
                // list[i].style.display = "none";
                // done.appendChild(list[i]);
                // list[i].classList.add("list");
                // list[i].style.display = "inline-flex"; 
        }
        else {
            // title[i].classList.remove("checked");
            // list[i].style.display = "none";
            // todo.appendChild(list[i]);
            // list[i].classList.add("list");
            // list[i].style.display = "inline-flex";
                
        }
        
        
    }
}
$(document).ready(function() {
    $("button").click(function() {
      $("#container").append($("#submit"));
    })
  });






var acc = document.getElementsByClassName("container");
var accd = document.getElementById("done");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

for (i = 0; i < accd.length; i++) {
    accd[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }



