
function calculateDaysUntil(targetDate) {
    var today = new Date();
    var target = new Date(targetDate);
    return Math.round((target - today) / (1000 * 60 * 60 * 24));
  }  

function f1() {
    var today = new Date();
    var target = new Date("2024-12-25");
  
    var variable = Math.round((target - today) / (1000 * 60 * 60 * 24));
  
    var christmasElement = document.getElementById("my-element");
    christmasElement.innerText = variable;
  }
  
  function f2() {
    var today = new Date();
    var target = new Date("2025-01-01");
  
    var variable = Math.round((target - today) / (1000 * 60 * 60 * 24));
  
    var newYearElement = document.getElementById("my-element2");
    newYearElement.innerText = variable;
  }
  
  f1();
  f2();
