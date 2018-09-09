import axios from 'axios';
import { ROOT_URL, USER_ID } from './config';

export const getUser = async () => {
  const res = await axios.get(`${ROOT_URL}/users/${USER_ID}`);
  console.log(res.data);
};

export const updateUser = async () => {
  const res = await axios.patch(`${ROOT_URL}/users/${USER_ID}`);
  console.log(res.data);
};
