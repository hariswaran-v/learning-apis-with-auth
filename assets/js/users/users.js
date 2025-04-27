const ALL_USERS_URL = "https://dummyjson.com/users";
const USER_DETAIL = "https://dummyjson.com/users/";
const LOGIN_USER = "https://dummyjson.com/auth/login";
export const getAllUsers = async () => {
  const userResponse = await fetch(ALL_USERS_URL);
  const userJson = await userResponse.json();
  return userJson;
};

export const getUser = async (id) => {
  const userResponse = await fetch(USER_DETAIL + id);
  return await userResponse.json();
};

export const loginUser = async (username, password) => {
  const loginResponse = await fetch(LOGIN_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (!loginResponse.ok) {
    throw new Error("Login failed. Please try again.");
  }

  const userJson = await loginResponse.json();
  console.log(userJson);

  return userJson; // ✅ Now it returns the user data
};
