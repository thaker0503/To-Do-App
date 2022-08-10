
window.onload = function () {
    document.getElementById("txt").focus();
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
            `<div class='list' > 
        
        <input type="checkbox"  name="checkBoxx" onclick="checkBoxClick()" class="checkBox myCheckbox"/> 
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


function checkBoxClick(){
   //create an array of all the checkboxes
var checkboxes = document.querySelectorAll('.checkBox');
var done = document.getElementById("lii-done");
var todo = document.getElementById("todo");
//loop through the array and add an event listener to each checkbox
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    //if the checkbox is checked
    if (this.checked) {
      //add the checked class to the parent label
      this.parentNode.classList.add('checked');
      this.parentNode.style.display = "none";
      //append the parent label to the done list
      done.appendChild(this.parentNode);
      this.parentNode.style.display = "inline-flex";

    } else {
      //remove the checked class from the parent label
      this.parentNode.classList.remove('checked');
      this.parentNode.style.display = "none";
      //append the parent label to the todo list
      todo.appendChild(this.parentNode);
      this.parentNode.style.display = "inline-flex";
    }
  });
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



