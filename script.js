function startCountdown() {
  // Get the countdown time input
  const countdownTime = new Date(document.getElementById('countdown-time').value).getTime();

  // Update the countdown every second
  const countdownInterval = setInterval(() => {
    // Get the current time
    const currentTime = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const remainingTime = countdownTime - currentTime;

    // Stop the countdown if the remaining time is less than or equal to zero
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown-display').innerHTML = 'Countdown complete!';
      return;
    }

    // Calculate the remaining time in days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the remaining time
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  }, 1000);
}
