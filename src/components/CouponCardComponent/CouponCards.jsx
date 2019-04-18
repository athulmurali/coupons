import React from "react";
import {connect} from "react-redux";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import {updateCoupons} from "../../redux/actions/DisplayCouponAction";
import PlusIcon from "../../assets/addNew.svg";
import LogOut_Success from "../../assets/addedNew.svg";
import {SEARCH_FIELD_NAMES, SORT_ORDERS} from "../../config/config";
import conditionalSearch from "../../utils/conditionalSearch";
import {loadCoupon} from "../../redux/actions/LoadCoupon";
import API from "../../utils/API";
import { RiseLoader } from 'react-spinners';

class CouponCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: [],
			loadedCouponsCheck: true,
			checkNewCoupon: false,
			tempLoadedCoupons: [],
			allCoupons : [],
			couponsLength : 0

		}
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if (!!nextProps && !!nextProps.allCoupons && nextProps.allCoupons !== this.state.allCoupons) {
			console.log("new array coming in .. ")
			this.setState({allCoupons: nextProps.allCoupons})





		}
		if (this.state.searchedCouponsLength !== nextProps.allCoupons.length)
		{
			console.log("allCoupons old length :",  this.state.couponsLength  , "newLength : ", nextProps.allCoupons.length)

			this.setState({searchedCouponsLength: nextProps.allCoupons.length},()=>{
			this.props.updateCoupons({searchedCouponsLength :nextProps.allCoupons.length })

			})
		}

	}

	flipCard =(index)=>{

		const allCoupons =  JSON.parse(JSON.stringify(this.state.allCoupons));
		const couponToFlip = allCoupons[index];
		if (!!couponToFlip)
		{
			couponToFlip.isFlipped = !couponToFlip.isFlipped

		}
		this.setState({ allCoupons  })
}


	loadCoupon = async (coupon, e, index) => {
		e.stopPropagation();
		const allCoupons = JSON.parse(JSON.stringify(this.state.allCoupons));
		const couponToFlip = allCoupons[index];

		if (!!couponToFlip && !couponToFlip.isLoaded) {
			couponToFlip.isLoaded = true;
			this.setState({allCoupons} , async () => {
				try {
					await API.loadCoupon(this.props.loyaltyNumber, coupon.id, coupon.source)

				} catch (e) {
					alert("Something went wrong in loading this coupon!")
				}

			})
		}


	};




	render() {
		console.log("couponCards re-rendering")
		let coupons = this.state.allCoupons;
		let couponsLength = coupons.length;


		if(!couponsLength) {
			return <div style={{justifyContent:"center", alignItems:"center", display:"flex", height: "670px", fontSize:"21px"}}> No Coupons Found </div>;
		}

		if(this.props.isLoading) {
			return <div style={{justifyContent:"center", alignItems:"center", display:"flex", height: "670px", fontSize:"21px"}}><RiseLoader size={20} color="#E0004D" /> </div>
		}

		debugger;


		return coupons.map((coupon,i)=><div className="Cards" key={i} onClick={() => this.flipCard(i)}>

				<Flippy
					isFlipped={!!coupon.isFlipped}
					flipOnHover={false} // default false
					flipOnClick={false} // default false
					flipDirection="vertical" // horizontal or vertical
					// ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
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
						backgroundColor: "white",
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
				<div className= "plusIcon" onClick={(e) => this.loadCoupon(coupon, e,i)}>
							<img className="addCheck" height="56px" width="56px"
								 src={(!!coupon.isLoaded || !! this.props.inLoadedScreen)
									 ? LogOut_Success: PlusIcon} alt = "plus sign unable to load"/>
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

	let allCoupons=  state.SearchSortFilterReducer.arr;
	allCoupons = JSON.parse(JSON.stringify(allCoupons));

	allCoupons =   toBeSearched ? conditionalSearch(allCoupons,SEARCH_FIELD_NAMES, searchText) : allCoupons;
	allCoupons = sortByKey(allCoupons, sortOption.sortBy,SORT_ORDERS.ASC, sortOption.sortOrder);

	return {
		allCoupons :allCoupons,
		LoadedCouponsTrigger: state.DisplayCouponsReducer.LoadedCouponsTrigger,
		inLoadedScreen: state.SearchSortFilterReducer.loaded.loaded,
		searchedCouponsLength: state.DisplayCouponsReducer.searchedCouponsLength,
		isDataUpdated: state.SearchSortFilterReducer.isDataUpdated,
		loyaltyNumber : state.DisplayCouponsReducer.loyaltyNumber,
		couponsLength : state.DisplayCouponsReducer.couponsLength,
		isLoading: state.SearchSortFilterReducer.isLoading

	};
};

const mapDispatchToProps = (dispatch) => ({
	updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue ),
	loadCoupon:(loyaltyNumber, couponId, couponSource)=>loadCoupon(dispatch,loyaltyNumber, couponId, couponSource)
});

export default connect(mapStateToProps,mapDispatchToProps)(CouponCards);

