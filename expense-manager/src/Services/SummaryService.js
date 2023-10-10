import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8081",
});
const headers = {
  Origin: "http://localhost:3000",
  Authorization: "Basic YWRtaW46YWRtaW4=",
};

export function summaryTotalAmount(userId) {
  return client.get(`/summary/${userId}/totalAmount`, headers);
}
