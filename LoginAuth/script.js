// Register User and Save to LocalStorage
function registerUserForm() {
  const username = document.getElementById("regInputUser").value;
  const password = document.getElementById("regInputPass").value;

  // Save as key-value pair
  localStorage.setItem("authUser", JSON.stringify({ username, password }));
  alert("Registration successful! Please login.");
  window.location.href = "index.html";
  return false;
}

// Login User
function loginUserForm() {
  const enteredUsername = document.getElementById("loginInputName").value;
  const enteredPassword = document.getElementById("loginInputPass").value;

  const savedUser = JSON.parse(localStorage.getItem("authUser"));

  if (
    savedUser &&
    enteredUsername === savedUser.username &&
    enteredPassword === savedUser.password
  ) {
    localStorage.setItem("isLoggedIn", true);
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password!");
  }

  return false;
}
