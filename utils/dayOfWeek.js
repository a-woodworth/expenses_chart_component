export function getDayOfWeek() {
  // Get the current day
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday - Saturday: 0 - 6

  return dayOfWeek;
}
