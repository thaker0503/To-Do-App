let c=1;
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
            `<div class='list' id="list"> 
        
        <input type="checkbox" id="a${c}"  onclick="checkBoxClick(this.id)" class="checkBox myCheckbox"/> 
        <span class="todo-description"> 
            <span class="title" id="title_a${c}"> ${document.querySelector('#txt').value}</span> 
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
    c+=1
}

// function checkBoxClick(id) {
//     var checkbox = document.getElementById(`${id}`);
//     var title = document.getElementById(`title_${id}`);
    // var list = document.getElementById(`list${id}`);
    // var done = document.getElementById("#lii-done");
    // var todo = document.getElementById("#todo");
//     if(checkbox.checked){
//       title.classList.remove("unchecked");
//       title.classList.toggle("checked");
      
//       list.style.display = "none";
//       done.appendChild(list);
      // list.classList.toggle("list");
      // list.style.display = "inline-flex"; 
      
//     }
//     else{
//       title.classList.remove("checked");
//       title.classList.toggle("unchecked");
      
      // list.style.display = "none";
      // todo.appendChild(list);
//       list.classList.add("list");
//       list.style.display = "inline-flex";
      
//     }
    
        
//   }

  function checkBoxClick(id) {
    var checkbox = document.getElementById(`${id}`);
    var title = document.getElementById(`title_${id}`);
    var list = document.getElementById("list");
    var done = document.getElementById("lii-done");
    var todo = document.getElementById("todo");
      
        if (checkbox.checked) {
          console.log(list);
            title.classList.toggle("checked");
            // list.style.display = "none";
            // done.appendChild(list);
            // list.style.display = "inline-flex"; 
          }
          else{
            if(title.classList.contains("checked")){
              title.classList.remove("checked");
              // list.style.display = "none";
              // todo.appendChild(list);
              // list.style.display = "inline-flex"; 

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



