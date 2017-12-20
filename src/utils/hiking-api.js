import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getSeattleData, getGreaterSeattleData};

function getSeattleData() {
const url = `${BASE_URL}/api/trails/seattle`;
  return axios.get(url).then(response => response.data);
}

function getGreaterSeattleData() {
  const url = `${BASE_URL}/api/trails/greaterSeattle`;
  return axios.get(url).then(response => response.data);
}