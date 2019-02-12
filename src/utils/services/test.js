import * as axios from 'axios'

// references :
// https://github.com/axios/axios


const baseURL =
    "https://randomuser.me/api/"

const axiosInstance =  axios.create({baseURL})

export const getCoupons=  () => (
    axiosInstance.get('/',
        {
            params: {
                nat: 'us',
                inc: 'name,picture,email,results=10&noinfo'
            }
        }))