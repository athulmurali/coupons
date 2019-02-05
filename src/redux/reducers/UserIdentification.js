export const UPDATE_COUPON_DETAILS  = "UPDATE_COUPON_DETAILS"

const initialState = {
    couponDetails : []
}




 const UserIdentification = (state = initialState, action)=>{


     switch (action.type) {

         case 'UPDATE_COUPON_DETAILS' :  return {
            ...state,...action.payload
        }

        default : return state

    }


}


export default  UserIdentification