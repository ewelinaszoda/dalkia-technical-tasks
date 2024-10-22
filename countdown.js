
function calculateDaysUntil(targetDate) {
    var today = new Date();
    var target = new Date(targetDate);
    return Math.round((target - today) / (1000 * 60 * 60 * 24));
  }  

function f1() {
    var daysUntilChristmas = calculateDaysUntil("2024-12-25");
  
    var christmasElement = document.getElementById("my-element");
    christmasElement.innerText = daysUntilChristmas;
  }
  
  function f2() {
    var daysUntilNewYear = calculateDaysUntil("2025-01-01");
  
    var newYearElement = document.getElementById("my-element2");
    newYearElement.innerText = daysUntilNewYear;
  }
  
  f1();
  f2();
