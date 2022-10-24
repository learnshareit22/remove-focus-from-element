// Just countdown 3 seconds unrelated to focus
let countdown = setInterval(() => {
  let currentSecond = document.querySelector("span").textContent;
  document.querySelector("span").textContent = Number(currentSecond) - 1;
}, 1000);

// ------ REMOVE FOCUS ------ \\
// Remove focus in 3 seconds
setTimeout(() => {
  // Get currently active Element
  let activeEl = document.activeElement;

  // Use blur() to remove focus
  activeEl.blur();

  // Stop countdown
  clearInterval(countdown);
}, 3000);
