import Cookies from "js-cookie";

export function getUser() {
  const user_data = Cookies.get("user_data");
  if (user_data) {
    let data = JSON.parse(user_data);
    data = { ...data, isAuth: true };
    return data;
  }
  return { isAuth: false };
}

export function setUser(user_data) {
  Cookies.set("user_data", user_data, { expires: 1 });
}
