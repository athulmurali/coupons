// This is a reducer file for cake properties customization

// Notes:
// To be made sure that the api response : _id or id


import {RESET} from "./DisplayCouponReducer";

export const TOGGLE_POP_UP = "TOGGLE_POP_UP"
const initialState = {
    // The index of the current selected property
    // if an user is currently in the third property , then value should be 2 (base 0)

    //options hold the possible options for each property in cake building steps

    //the following will be used by order review
    isPopUpOpen : false

}
const AssistanceReducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_POP_UP : return {...state, isPopUpOpen: !state.isPopUpOpen}

        case RESET : return {

            ...initialState
        }

        default :
            return state
    }
}
export default AssistanceReducer