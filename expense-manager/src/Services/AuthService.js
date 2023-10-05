//implementing a dummy login
//TODO : use backend api verification

export function authenticate(username, pasword) {
  return username === "admin" && pasword === "admin";
}
