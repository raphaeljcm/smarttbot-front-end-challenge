import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://api-front-test.k8s.smarttbot.com/api/v1/robot'
  baseURL: 'https://api.k8s.smarttbot.com/api-front-test/api/v1/robot'
});