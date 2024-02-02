import axios from 'axios';

//axios 설정
const client = axios.create({
  baseURL: 'http://ec2-3-34-111-53.ap-northeast-2.compute.amazonaws.com:8080', // API의 기본 URL
  headers: {
    'Content-Type': 'application/json', // 요청 시에 JSON 형식으로 데이터를 보내도록 설정
  },
});

// 요청 인터셉터(interceptor)
client.interceptors.request.use(
  (config) => {
    // 여기에 요청 전에 수행할 작업을 추가
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터(interceptor)
client.interceptors.response.use(
  (response) => {
    // 여기에 응답을 받은 후 수행할 작업을 추가
    return response;
  },
  (error) => {
    // 응답 에러 처리
    return Promise.reject(error);
  }
);

export default client;
