import axios from "axios";
export const callApi = async ({ URL, TYPE, DATA }) => {
  const res = await axios({
    method: TYPE,
    url: URL,
    headers: {
      "Accept-Encoding": "application/json",
      "Content-Type": "application/json",
      "client-name": "activefitness",
      "client-token":
        "QIJZjqg8EPHaitFd6PncOb1zuFBcECK1aPNiVXQ1stS4GZZ0K7kMTfbn_bDtg3LwkScRLvd1UaXPX3gdWiyTWU_EQeBtpaKvN_NtqzRlAVslmHfsi50dgDmg0Pbk80oLqbN8TB4JctgM6VuvI5yCrwyID9GNwItSMVpd1ZjOmGTiof2hqi6E3KH3j9RfWz_Gq4Vq61XvYKEooDzDjuFSoie1vkptVp2fngRMBTxTTM2ZBCEpd_HbcrqBiHuIMw19nyXr8mP7n8rPLG4S1LA",
    },
    data: DATA,
  });
  return { data: res?.data };
};
