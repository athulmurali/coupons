export const UPDATE_COUPON_DETAILS  = "UPDATE_COUPON_DETAILS"
export const RESET = "RESET"


const initialState = {
    couponDetails : []
}



 const UserIdentification = (state = initialState, action)=>{


     switch (action.type) {

         case 'UPDATE_COUPON_DETAILS' :  return {
            ...state,...action.payload
        }

         case RESET : return {

            ...initialState
         }

        default : return state

    }


}


export default  UserIdentification