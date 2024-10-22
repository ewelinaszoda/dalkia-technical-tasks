const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
const CHRISTMAS_DATE = "2024-12-25";
const NEW_YEAR_DATE = "2025-01-01";
const CHRISTMAS_ELEMENT_ID = "my-element";
const NEW_YEAR_ELEMENT_ID = "my-element2";

const calculateDaysUntil = (targetDate) => {
    const today = new Date();
    const target = new Date(targetDate);
    return Math.round((target - today) / MILLISECONDS_PER_DAY);
  };
  
  const updateDaysUntil = (elementId, targetDate) => {
    const daysUntil = calculateDaysUntil(targetDate);
    const element = document.getElementById(elementId);
    element.innerText = daysUntil;
  };
  
  const updateDaysUntilChristmas = () => {
    updateDaysUntil(CHRISTMAS_ELEMENT_ID, CHRISTMAS_DATE);
  };
  
  const updateDaysUntilNewYear = () => {
    updateDaysUntil(NEW_YEAR_ELEMENT_ID, NEW_YEAR_DATE);
  };
  
  updateDaysUntilChristmas();
  updateDaysUntilNewYear();
