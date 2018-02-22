import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export {getSeattleData, getGreaterSeattleData};

function getSeattleData() {
const url = `${BASE_URL}/api/trails`;
  return axios.get(url).then(response => response.data);
}

function getGreaterSeattleData() {
  const url = `${BASE_URL}/api/trails/greaterSeattle`;
  return axios.get(url).then(response => response.data);
}