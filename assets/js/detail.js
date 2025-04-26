import { getUser } from "./users/users";
const userIdEl = document.querySelector("#userId");

const predictedUserId = location.search.split("user=")[1];
const userId = parseInt(predictedUserId);
if (isNaN(userId)) {
  window.location.href = "/";
}

const userObj = await getUser(userId);

userIdEl.textContent = `Hello "${userObj.firstName} ${userObj.lastName}"`;
