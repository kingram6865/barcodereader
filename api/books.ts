import axios from 'axios';
// import api from '../utilities/api'

export async function getBooksByISBN(isbn: any) {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    return await response.json()
  } catch(err) {
    console.log(err)
    throw err;
  }
}

export async function addToDatabase(data: Object) {
  try {
    // console.log(`\x1b[32m(books.ts) [Line 10]: ${process.env.EXPO_PUBLIC_BACKEND_BASE_URI}/library/paper\x1b[0m`, data)
    let results = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_BASE_URI}/library/paper`, data);
    // let results = await api.post('/library/paper', data)
    // console.log(`\x1b[34m\x1b[1m${JSON.stringify(results.data)}\x1b[0m`)
    return results.data
  } catch (err: any) {
    if (err.response) {
      console.log('Response error', JSON.stringify(err.response.data, null, 2));
      console.log('Response status', JSON.stringify(err.response.status, null, 2))
    } else if (err.request) {
      console.log('Request error', JSON.stringify(err.request, null, 2))
    } else {
      console.log(JSON.stringify(err.message, null, 2));
    }

    throw err;

  }
}
