// Just countdown 3 seconds unrelated to focus
let countdown = setInterval(() => {
  let currentSecond = document.querySelector("span").textContent;
  document.querySelector("span").textContent = Number(currentSecond) - 1;
}, 1000);

// ------ REMOVE FOCUS ------ \\
// Get input
let input = document.querySelector(".text");

// Focus input when the page is loaded
input.focus();

// Remove focus in 3 seconds
setTimeout(() => {
  // Use blur() to remove focus
  input.blur();

  // Stop countdown
  clearInterval(countdown);
}, 3000);
