const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let userInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      userInput = "";
      display.value = "";
    } else if (value === "=") {
      try {
        userInput = eval(userInput).toString();
        display.value = userInput;
      } catch (error) {
        display.value = "Error";
      }
    } 
    else {
      userInput += value;
      display.value = userInput;
    }
  });
});
