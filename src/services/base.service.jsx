import axios from 'axios'
const API_URL = process.env.REACT_APP_API_THEM_MOVIE_URL

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  },
})
