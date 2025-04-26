import { loginUser } from "./users/users";

const usernameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");
const formEl = document.querySelector("form");
const greetUserEl = document.querySelector("span#greetUser");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (usernameEl && passwordEl) {
    try {
      const userInfo = await loginUser(usernameEl.value, passwordEl.value);

      if (userInfo.message === "Invalid credentials") {
        alert(userInfo.message);
      } else {
        console.log(userInfo);
        greetUserEl.textContent = userInfo.firstName + " " + userInfo.lastName;
      }
    } catch (error) {
      // Added check to handle if error doesn't have a message property
      const errorMessage =
        error?.message || "Something went wrong, please try again!";
      console.log("Error:", errorMessage);
      alert(errorMessage); // To show the message in a more user-friendly way
    }
  } else {
    console.log("Can't get the value");
  }
});
