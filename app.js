// Function to get the current day of the week and highlight it in the chart
function getDayOfWeek() {
  // Get the current date
  const today = new Date();
  const dayOfWeek = today.getDay() - 1; // Adjust to 0-6 range

  // Get corresponding day from chart
  const chartDays = document.querySelectorAll('.chart__table-day');
  const dayArray = Array.from(chartDays);
  const currentDayColumn = dayArray[dayOfWeek].nextElementSibling;

  // Add class to highlight the current day
  currentDayColumn.classList.add('highlight');
}

getDayOfWeek();
