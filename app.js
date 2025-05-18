// Function to get the current day of the week and highlight it in the chart
function getDayOfWeek() {
  // Get the current date
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday - Saturday: 0 - 6

  // Get corresponding day from chart
  const chartDays = [
    ...document.querySelectorAll('.chart__table-day'),
  ];
  let currentDayColumn;

  // If it's Sunday, get the last chart column amount
  if (dayOfWeek === 0) {
    currentDayColumn = chartDays[6].nextElementSibling;
  } else {
    // Subtract 1 to get the correct chart column amount
    currentDayColumn = chartDays[dayOfWeek - 1].nextElementSibling;
  }

  // Add class to highlight the current day
  currentDayColumn.classList.add('highlight');
}

getDayOfWeek();
