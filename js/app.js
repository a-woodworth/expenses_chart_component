import { getDayOfWeek } from './dayOfWeek.js';

const url = '/../data.json';
const tableBody = document.querySelector('.chart__table tbody');
let chartDays;

async function getChartData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Loop through the data and create table rows
    // Using Chart.css library so need to add CSS --size variable for bar height
    data.forEach((object) => {
      const chartDay = object.day;
      const chartAmount = object.amount;

      let tableRow = `<tr>
        <th scope="row" class="chart__table-day" tabindex="0">
          ${chartDay}
        </th>
        <td
          class="chart__table-amount" tabindex="0"
          style="--size: calc(${chartAmount} / 100)"
        >
          <span class="data">$${chartAmount}</span>
          <span class="tooltip" aria-hidden="true">
            $${chartAmount}
          </span>
        </td>
      </tr>`;

      tableBody.insertAdjacentHTML('beforeend', tableRow);
    });

    // Get all chart days after the data has been inserted into the table
    chartDays = [...tableBody.querySelectorAll('tr')];
    highlightCurrentDay();
  } catch (error) {
    tableBody.innerHTML =
      'Sorry, there was a problem getting your expense information. Please try again.';
    console.error(error);
  }
}

function highlightCurrentDay() {
  const currentDay = getDayOfWeek();
  let currentDayColumn;

  // If it's Sunday, get the last chart column amount
  if (currentDay === 0) {
    currentDayColumn = chartDays[6];
  } else {
    // Subtract 1 to get the correct chart column amount
    currentDayColumn = chartDays[currentDay - 1];
  }

  // Add class to highlight the current day
  currentDayColumn
    .querySelector('.chart__table-amount')
    .classList.add('highlight');
}

getChartData();
