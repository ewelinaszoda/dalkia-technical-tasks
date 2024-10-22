
function calculateDaysUntil(targetDate) {
    var today = new Date();
    var target = new Date(targetDate);
    return Math.round((target - today) / (1000 * 60 * 60 * 24));
  }  

function updateDaysUntil(elementId, targetDate) {
  var daysUntil = calculateDaysUntil(targetDate);
  var element = document.getElementById(elementId);
  element.innerText = daysUntil;
}

function updateDaysUntilChristmas() {
    updateDaysUntil("my-element", "2024-12-25");
  }
  
function updateDaysUntilNewYear() {
    updateDaysUntil("my-element2", "2025-01-01");
  }
  
  updateDaysUntilChristmas();
  updateDaysUntilNewYear();
