import { URL_BACKEND } from '@/config';
import second from 'axios';

const instance = second.create({
  baseURL: URL_BACKEND
});

export default instance;