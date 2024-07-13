import axios from 'axios'

const axiosPanda = axios.create({
  baseURL: 'https://panda-market-api.vercel.app/',
})

export default axiosPanda
