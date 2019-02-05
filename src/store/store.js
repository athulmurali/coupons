import { createStore } from "redux";
import displayCouponsState from "../reducers/displayCouponReducers";

function configureStore(state) {
	return createStore(displayCouponsState, state);
}
export default configureStore;