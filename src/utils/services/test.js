import * as axios from 'axios'

// references :
// https://github.com/axios/axios


const baseURL =
    "https://randomuser.me/api/"

const axiosInstance =  axios.create({baseURL})

export const getAllCoupons =  (searchParams, filterParams, sortParams) => {

    console.log(searchParams)
    const queryParams = {
        ...searchParams,
        ...filterParams,
        ...sortParams
    }

    console.log(queryParams)
    const tempUrl = "http://innovationd.aholdusa.com:3526/couponServer/coupons/fetchCouponsByFilter/?sortBy=price&sortOrder=asc&filterByString=[Soups%20_%20Canned%20Goods]&searchString=Kel&loaded=false"
    return  axiosInstance.get(tempUrl, {
        // params: {
        //     nat: 'us',
        //     inc: 'name,picture,email,results=10&noinfo'
        // }
    })
}


// baseUrl to be updated
export const getLoadedCoupons =  (searchParams, filterParams, sortParams) => {

    console.log(searchParams)
    const queryParams = {
        ...searchParams,
        ...filterParams,
        ...sortParams
    }

    console.log(queryParams)
    axiosInstance.get({
        params: {...queryParams}
    }).then(console.log)

     const tempUrl = "http://innovationd.aholdusa.com:3526/couponServer/coupons/fetchCouponsByFilter/?sortBy=price&sortOrder=asc&filterByString=[Soups%20_%20Canned%20Goods]&searchString=Kel&loaded=false"
   return  axiosInstance.get(tempUrl, {
        // params: {
        //     nat: 'us',
        //     inc: 'name,picture,email,results=10&noinfo'
        // }
    })
}