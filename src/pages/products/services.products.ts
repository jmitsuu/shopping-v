import { endPoint } from '@/api/endpoint';
import axios from 'axios';
import { getTokenAdmin } from '../../utils/getlocalstorage';
const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts(limit: number) {
  try {
    const { data } = await axios.get(
      `${API_URL + endPoint.products.list}?limit=${limit}`
    );
    return data;
  } catch (error: any) {
    console.log(error);
  }
}
export async function getProductsGenders(gender: string) {
  try {
    const { data } = await axios.get(
      `${API_URL + endPoint.products.list}/searchbygender?gender=${gender}`
    );
    return data;
  } catch (error: any) {
    console.log(error);
  }
}

export async function createProduct(product: FormData) {
  const token = getTokenAdmin.userData
    ? JSON.parse(getTokenAdmin.userData)
    : null;
  try {
    return await axios.post(`${API_URL + endPoint.products.create}`, product, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `${token?.token}`,
      },
    });
  } catch (error: any) {
    console.log(error.data);
  }
}

export async function editProduct({
  product,
  productId,
}: {
  product: FormData;
  productId: string;
}) {
  const token = getTokenAdmin.userData
    ? JSON.parse(getTokenAdmin.userData)
    : null;
  try {
    return await axios.put(
      `${API_URL + endPoint.products.edit}/${productId}`,
      product,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `${token?.token}`,
        },
      }
    );
  } catch (error: any) {
    console.log(error.response?.data || error.message);
  }
}
