import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8081",
});
const headers = {
  Origin: "http://localhost:3000",

  Authorization: "Basic YWRtaW46YWRtaW4=",
};

export function getUser(userId) {
  console.log(`Call to getUser - ${userId}`);
  return client.get(`users/${userId}`, headers);
}

export function getExpenses(userId) {
  console.log(`Call to getExpenses - ${userId}`);
  return client.get(`users/${userId}/expenses`);
}
