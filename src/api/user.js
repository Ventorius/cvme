import axios from 'axios';
import { ROOT_URL, USER_ID } from './config';

class UserService {
  getUser = async () => {
    const res = await axios.get(`${ROOT_URL}/users/${USER_ID}`);
    return res.data;
  }

  updateUser = async () => {
    const res = await axios.patch(`${ROOT_URL}/users/${USER_ID}`);
    return res.data;
  }
}

export default new UserService();
