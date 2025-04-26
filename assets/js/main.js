import { getAllUsers } from "./users/users";
const usersPlaceholderEl = document.querySelector("#users-placeholder");

const allUsers = await getAllUsers();

allUsers.users.map((user) => {
  usersPlaceholderEl.innerHTML += `<a href="/detail.html?user=${user.id}" class="block bg-pink-300 px-5 py-2 rounded hover:bg-pink-400">
          <h5 class="font-semibold">${user.firstName} (${user.age})</h5>
          <div>${user.email}</div> </a>`;
});
