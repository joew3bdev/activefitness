import axios from "axios";
export const callApi = async ({ URL, TYPE, DATA }) => {
  const res = await axios({
    method: TYPE,
    url: URL,
    headers: {
      "Content-Type": "application/json",
      "client-service": "activefitness",
      "auth-key": "AFSQUZTREVWU1RBR0lOR1NFUlZFUjAwMDk5OTk5OQ",
    },
    data: JSON.stringify(DATA),
  });
  return { data: res?.data };
};
