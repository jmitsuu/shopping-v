import { endPoint } from '@/api/endpoint';
import axios from 'axios';
import { getTokenAdmin } from '../../../utils/getlocalstorage';
const API_URL = import.meta.env.VITE_API_URL;

export async function userAdminSignin() {
  const token = getTokenAdmin.userData
    ? JSON.parse(getTokenAdmin.userData)
    : null;
  if (token) {
    return await axios.get(`${API_URL + endPoint.user.admin}`, {
      headers: {
        authorization: `${token?.token}`,
      },
    });
  }
}
