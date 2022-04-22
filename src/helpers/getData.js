import axios from 'axios'

export const getData = async(url) => {
const req = axios.get(url)
const res = await req
return res;
}
