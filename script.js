window.onload = function() {
    document.getElementById("txt").focus();
}

  function addItem() {
    if(document.querySelector('#txt').value != ""){
    document.querySelector('.lii').innerHTML +=
        `<div class='list'> 
    ${document.querySelector('#txt').value}  <i class="fa-solid fa-xmark close"></i>`

    document.querySelector('#txt').value = "";
    }    
    else{
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