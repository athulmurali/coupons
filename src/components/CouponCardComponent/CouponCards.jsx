import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import {updateCoupons, flipCard} from "../../redux/actions/DisplayCouponAction";
import PlusIcon from "../../assets/addNew.svg";
import LogOut_Success from "../../assets/addedNew.svg";
import {SORT_ORDERS} from "../../config/config";
import conditionalSearch from "../../utils/conditionalSearch";
let loadedSet = new Set([]);
let x = [];

class CouponCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: [],
			loadedCouponsCheck: true, 
			checkNewCoupon: false,
			tempLoadedCoupons: [],
		}
	}

	swapIcon = (coupon, e) => {
		if(!loadedSet.has(coupon._id) && e.target !== e.currentTarget && !!coupon.loaded === false) {
			coupon.loaded = true;
			loadedSet.add(coupon._id);
			x.push(coupon);
			this.setState({tempLoadedCoupons : x});
			this.props.updateCoupons({loadedCouponIds: loadedSet});
		}
		else if(coupon.loaded === false){
			coupon.loaded = true;
			this.setState({checkNewCoupon: true});
		}
	}

	

	render() {
		let coupons = this.props.allCoupons
		let isDataUpdated = this.props.isDataUpdated;
		let couponsLength = this.props.allCoupons.length;


		if(couponsLength === 0) {
			return <div style={{justifyContent:"center", alignItems:"center", display:"flex", height: "670px", fontSize:"21px"}}> No Coupons Found </div>;
		}

		if(this.props.loaded){
			coupons = coupons.concat(this.state.tempLoadedCoupons);
			couponsLength = coupons.length;
			this.props.updateCoupons({"searchedCouponsLength": couponsLength});
		}
		
		return coupons.map((coupon,i)=><div className="Cards" key={i} onClick={() => this.props.flipCard(i)}>
				
				<Flippy 
					isFlipped={!isDataUpdated && coupon.isFlipped}
					flipOnHover={false} // default false
					flipOnClick={false} // default false
					flipDirection="horizontal" // horizontal or vertical
					ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
					style={{
						width: "260px",
						height: "343px",
						padding: "30",
					}}>
					<BackSide 
					style={{
						backgroundColor: "white",
						color: "black",
						width: "260px",
						height: "399px",
					}} >
						<h5 className="couponTitle"> {coupon.title}</h5> 
						<h5 className="couponName"> {coupon.name}</h5> 
						<h5 className="couponCategory"> {coupon.couponCategory}</h5> 
						<h6 className="couponDescription"> {coupon.description} </h6>
						<h6 className="legalText"> {coupon.legalText} </h6>
						<h6 className="viewMore"> View less </h6>
					</BackSide>
					<FrontSide 
										
										// ref = {el => this.flippy.toggle = el} 'http'+coupon.url.substring(5)
										style={{
						width: "260px",
						height: "399px",
					}} 
					>
					
						<img src={coupon.url} width="80px" height="100px" alt="image_image" />
						<h5 className="couponTitle"> {coupon.title}</h5> 
						<h5 className="couponName"> {coupon.name}</h5> 
						<h6 className="couponDescription"> {coupon.description} </h6>
						<h6 className="expireDate"> <span className="expire">Exp:</span>{coupon.expirationDate.slice(0,10)} </h6>
						<h6 className="viewMore"> View more </h6>
					</FrontSide>
				</Flippy>
				<div className= "plusIcon" onClick={(e) => this.swapIcon(coupon, e)}>
							<img className="addCheck" height="56px" width="56px" src={(coupon.loaded) ? LogOut_Success: PlusIcon} alt = "plus sign unable to load"/>	
						</div>
			</div>);

	}
}


const mapStateToProps=(state)=>{

	const comparator=(order ,ascOrderVal)=>
		(order === ascOrderVal ? (obj1, obj2)=>(obj1 > obj2) : (obj1, obj2)=>(obj1 < obj2));

	const sortByKey = (arr, key, ascOrderVal, order)=>
		(arr.sort((obj1,obj2)=>
			(comparator(order,ascOrderVal)(obj1[key].toString().toLowerCase(),obj2[key].toString().toLowerCase()) ? 1 : -1 )));

	let toBeSearched = state.SearchSortFilterReducer.toBeSearched;
	let searchText =state.SearchSortFilterReducer.search.searchString;
	let sortOption = state.SearchSortFilterReducer.sort;

	let allCoupons=  state.DisplayCouponsReducer.allCoupons;

	allCoupons =   toBeSearched ? conditionalSearch(allCoupons,"name", searchText) : allCoupons;
	// allCoupons = sortByKey(allCoupons, sortOption.sortBy,SORT_ORDERS.ASC, sortOption.sortOrder);

	return {
		allCoupons :allCoupons,
		LoadedCouponsTrigger: state.DisplayCouponsReducer.LoadedCouponsTrigger,
		loaded: state.SearchSortFilterReducer.loaded.loaded,
		searchedCouponsLength: state.DisplayCouponsReducer.searchedCouponsLength,
		isDataUpdated: state.SearchSortFilterReducer.isDataUpdated

	};
};

const mapDispatchToProps = (dispatch) => ({
	updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue ),
	flipCard :(i)=>flipCard(dispatch, i)
}
);
 
export default connect(mapStateToProps,mapDispatchToProps)(CouponCards);

