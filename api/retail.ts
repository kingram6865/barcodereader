import axios from 'axios';

export async function addFood(data: object) {
  try {
    let results = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_BASE_URI}/food/personal/inventory`, data);
    return results.data
  } catch(err) {
    console.log(err)
    throw err;
  }
}