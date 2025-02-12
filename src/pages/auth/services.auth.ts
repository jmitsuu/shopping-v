import { endPoint } from '@/api/endpoint';
import axios from 'axios';
import { TuserCreate, TuserSignin } from './auth.type';
import { toast } from 'sonner';
const API_URL = import.meta.env.VITE_API_URL;

export async function createUser(user: TuserCreate) {
  try {
    return await axios.post(`${API_URL + endPoint.user.create}`, user);
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
}
export async function userSignin(user: TuserSignin) {
  try {
    return await axios.post(`${API_URL + endPoint.user.login}`, user);
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
}
