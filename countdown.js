const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

const COUNTDOWNS = [
    { name: "Christmas", date: "2024-12-25", elementId: "my-element" },
    { name: "New Year", date: "2025-01-01", elementId: "my-element2" },
    { name: "Valentine's Day", date: "2025-02-14", elementId: "my-element3" }
];

const calculateDaysUntil = (targetDate) => {
    const today = new Date();
    const target = new Date(targetDate);
    return Math.round((target - today) / MILLISECONDS_PER_DAY);
  };
  
  const updateCountdowns = () => {
    COUNTDOWNS.forEach(countdown => {
        const daysUntil = calculateDaysUntil(countdown.date);
        const element = document.getElementById(countdown.elementId);
        element.textContent = daysUntil;
    });
};
  
updateCountdowns();
