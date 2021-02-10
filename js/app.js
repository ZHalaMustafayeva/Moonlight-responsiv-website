const currentLocation = location.href;
const menuItem = document.querySelectorAll('ul>li>a');
const menuLength = menuItem.length;
for(let i=0;i<menuLength;i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active";
    }
}

function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    
    error.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error.innerHTML = text;
      return false;
    }
   
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

 

  function myFunc(e){
   
      var elem = document.getElementById("sidebar"),
    Style = window.getComputedStyle(elem),
    left = Style.getPropertyValue("left");
    if(left == "0px"){
        elem.style.left = "-260px";
        
    }
    else{ 
        elem.style.left = "0px";
    }
    
    
}