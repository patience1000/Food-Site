function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "Nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "Nav-bar";
    }
   }

   function Show1() {
    document.getElementById('div2').style.display = "block";
    document.getElementById('div1').style.display = "none";
  }

  function Show2() {
    document.getElementById('div1').style.display = "block";
    document.getElementById('div2').style.display = "none";
  }