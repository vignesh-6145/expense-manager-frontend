import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8081",
});
const headers = {
  Origin: "http://localhost:3000",
  Authorization: "Basic YWRtaW46YWRtaW4=",
};

export function getExpense(userId, expenseId) {
  return client.get(`users/${userId}/expenses/${expenseId}`, headers);
}

export function updateExpense(userId, expense) {
  return client.put(`users/${userId}/updateExpense`, expense, headers);
}

export function deleteExpense(userId, expenseId) {
  return client.delete(`users/${userId}/expenses/${expenseId}`, headers);
}
