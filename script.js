document.addEventListener('DOMContentLoaded', function() {
  var hilitable = document.getElementsByClassName("hilightable");
  for(var i = 0; i<hilitable.length;i++){
    hilitable[i].addEventListener("focus", function(){
      this.classList.toggle("highlight")
    });
    hilitable[i].addEventListener("blur", function(){
      this.classList.toggle("highlight")
    });
  }

  document.getElementById("mainForm").addEventListener("submit", function(e) {
    var required = document.getElementsByClassName("required");
    for(var i = 0; i<required.length;i++){
      if(required[i].value==""){
      required[i].classList.add("error");
      required[i].addEventListener("keydown", function(){
        this.classList.remove("error");
        this.removeEventListener("keydown",arguments.callee,false);
      });
      e.preventDefault();
    }
    }

  });

}, false);
