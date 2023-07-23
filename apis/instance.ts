import axios from 'axios';

const instance = axios.create({
  //! production 배포는 .env 연동 필수
  baseURL: 'https://books-api.nomadcoders.workers.dev',
});

export default instance;
