// This is a reducer file for cake properties customization

// Notes:
// To be made sure that the api response : _id or id

const initialState = {
    // The index of the current selected property
    // if an user is currently in the third property , then value should be 2 (base 0)

    //options hold the possible options for each property in cake building steps

    //the following will be used by order review
    isPopUpOpen : false

}
const AssistanceReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'TOGGLE_POP_UP' : return {...state, isPopUpOpen: !state.isPopUpOpen}

        default :
            return state
    }
}
export default AssistanceReducer