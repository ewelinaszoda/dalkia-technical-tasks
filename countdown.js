const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

const COUNTDOWNS = [
    { name: "Christmas", date: "2024-12-25", elementId: "christmas-countdown" },
    { name: "New Year", date: "2025-01-01", elementId: "new-year-countdown" },
    { name: "Valentine's Day", date: "2024-02-14", elementId: "valentines-countdown" }
];

const calculateDaysUntil = (targetDateString) => {
    const now = new Date();
    let targetDate = new Date(targetDateString);
    
    while (targetDate <= now) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }
    
    const timeDiff = targetDate.getTime() - now.getTime();
    return Math.round(timeDiff / MILLISECONDS_PER_DAY);
};

const updateCountdowns = () => {
    COUNTDOWNS.forEach(countdown => {
        const daysUntil = calculateDaysUntil(countdown.date);
        const element = document.getElementById(countdown.elementId);
        if (element) {
            element.textContent = daysUntil;
        } else {
            console.warn(`Element with id ${countdown.elementId} not found for ${countdown.name} countdown.`);
        }
    });
};
  
updateCountdowns();
