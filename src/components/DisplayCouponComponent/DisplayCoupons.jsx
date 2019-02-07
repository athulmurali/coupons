import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import Popup from "reactjs-popup";
import ReactToPrint from "react-to-print";
import Config from "../../config/config";
import {connect} from "react-redux";
import CouponCards from "../CouponCardComponent/CouponCards";
import {updateCoupons} from "../../redux/actions/UserIdentification";
import {displayCouponState} from "../../redux/actions/DisplayCouponAction";

class Coupons extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			count: 0,
			hideLoadedCoupons: true,
			hideNewCoupons: false,
			activeNewCoupons: "active",
			activeLoadedCoupons: "inactive",
			logOutTrigger: false,
			logOutReload: false,
			searchedCouponName: "",
			barName:  "Search By Coupon Name",
			filter_arrow: false,
			sort_arrow: false,
			array_filter : []
		};		
		this.Image_up = require('../../assets/new-filter-arrow-down.svg');
		this.Sort_up = require('../../assets/new-filter-arrow-down.svg');
		let sort_category = ["Redeem By Date"	,"Value(Low to High)	","Value(High to Low)"	," Brand"	, "Recommended"];
		let filter_category = [];
	}
	
	buttonClick = (el) => {
		if(el) {
		el.click();
		};
	}

	componentDidUpdate () {
		// <CouponCards />
	}

	componentWillUnmount () {
		clearInterval(this.timer);
	}

	componentDidMount () {
		// this.startTimer();
		this.tick();
	}

	tick () {
	  this.setState({count: (this.state.count + 1)});
	}
	startTimer () {
		clearInterval(this.timer);
		this.timer = setInterval(this.tick.bind(this), 1000);
	}
	timerReset = () =>  {
		this.setState({count : 0});
	}

	newXyz = ()  => {
		this.setState({count : 0});
		}

	handleScreenTap = () => {
			this.props.history.push(`/`);
	}

	NewCoupons = () => {
		this.setState({count : 0});
		this.state.hideNewCoupons = false;
		this.state.hideLoadedCoupons = true;
		this.state.activeNewCoupons = "active";
		this.state.activeLoadedCoupons = "inactive";
	}

	LoadedCoupons = () => {
		this.setState({count : 0});
		this.state.hideNewCoupons = true;
		this.state.hideLoadedCoupons = false;
		this.state.activeNewCoupons = "inactive";
		this.state.activeLoadedCoupons = "active";
	}
	Filter = () => {
		if(this.state.filter_arrow === false){
		this.setState({filter_arrow : true});
		this.Image_up = require('../../assets/new-filter-arrow-up.svg');
		}
		else{
			this.setState({filter_arrow : false});
		this.Image_up = require('../../assets/new-filter-arrow-down.svg');
		}
		
		console.log(this.state.filter_arrow);
	}
	Sort = () => {
		if(this.state.sort_arrow === false){
		this.setState({sort_arrow : true});
		this.Sort_up = require('../../assets/new-filter-arrow-up.svg');
		}
		else{
			this.setState({sort_arrow : false});
		this.Sort_up = require('../../assets/new-filter-arrow-down.svg');
		}
	}


	inputChange = (e) => {
		this.setState({count : 0});
		this.props.displayCouponState({searchedCouponName : e.target.value})
		this.state.searchedCouponName = e.target.value;

	}

	clearInput = (e) => {
		e.target.value = "";
		this.state.searchedCouponName = e.target.value ;
	}
	Sorting_Category = () => {
		const sort_category = ["Redeem By Date"	,"Value(Low to High)	","Value(High to Low)"	," Brand"];
		return(
			sort_category.map( cate => <div key={cate} className="filter_inside" hidden= {!this.state.sort_arrow}>
			<input name="_filter" type="checkbox"/>
			<label>
				  {cate}
			</label>
		</div>)
		)
	 }

	 Filter_Category = () => {
		const filter_category = ["Baby & Childcare"	,"Bakeray","Beverages"	,"Condiments & Sauces","Dairy","Deli","Ethnic Products","Frozen Food","General Merchandise"];
		return(
			filter_category.map( fill => <div  key={fill} className="filter_inside" hidden= {!this.state.filter_arrow}>
			<input name="_filter" type="checkbox" onClick={() => this.filtering(fill)}/>
			<label>
				  {fill}
			</label>
		</div>)
		)
	 }
	 filtering = (e) => {
		
		this.state.array_filter.push(e);
		
     }
     
	render() {
		if(this.props.data.length<1) {
			return <div>No Data Obtained</div>
		}



		let couponData = this.props.data;
		let buttonTrigger = "";
		let logOutPopUpTrigger = "";
		// let userCoupons = [];
		let userCouponData = "";
		let couponsLength = "";
		let userName = "";
		let searchedCoupons = "";
    let searchedCoupon = this.state.searchedCouponName;
			
		if(couponData.length > 0) {
			userName = couponData[0].FirstName;
		}			


		if(this.state.count > Config.POPUPTIMER){
				buttonTrigger = this.buttonClick;
				if(this.state.count > Config.LOGOUTTIMER) {
					this.handleScreenTap();
				}
    }
        
		if(this.state.logOutTrigger) {
			logOutPopUpTrigger = this.buttonClick;
			this.setState({logOutTrigger: false},
				()=>{
					this.setState({count : 0},
						()=>{
							this.setState({logOutReload: true});
						});
				});
		}

		if(this.state.logOutReload) {
			if (this.state.count > 3) {
				this.handleScreenTap()
			}
		}

// Filtering Coupons By Name
		if (couponData.length > 0) {
			userCouponData = couponData[1];
			couponsLength = userCouponData.length;
			searchedCoupons = userCouponData;
			if(searchedCoupons.length > 0) {
				couponsLength = searchedCoupons.length;
				searchedCoupons = searchedCoupons.filter(function(item){
					return item.Name.toLowerCase().includes(searchedCoupon.toLowerCase());
				});
			}
		}

		if(searchedCoupon.length >0){
			this.props.updateCoupons({'couponDetailsSearchedCopy': searchedCoupons})
		}

		if(this.state.array_filter.length > 0){
			// userCoupons.filter(function(filterMatch){
			// 	return filterMatch.
			// }) 
			// console.log(userCoupons);
		}
		const Image_coupon = require("../../assets/stopandshop.png");
		const LogOut_Success = require("../../assets/success.svg");
		const Search_Icon = require("../../assets/new-filter-search.png");
		const slideArrow = [
			this.Image_up
		];
		const slideArrow_Sort = [
			this.Sort_up
		];

	let popUpLogout = (<Popup trigger={<button ref = {logOutPopUpTrigger}  className="button" ></button>} true modal>
					{close => (
						<div className="modal">
							<img className="logOutImage" src={LogOut_Success}></img>
							<h1 className="logOutMessage1"> Enjoy your savings!</h1>
							<h4 className="logOutMessage2">You have been successfully logged out. <br/> See you soon!</h4>
						</div>)}
				</Popup> );

	let sessionEndPopUp = (<Popup trigger={<button ref = {buttonTrigger}  className="button" ></button>} true modal>
					{close => (
						<div className="modal">
							<h1 className="popupHeader"> Are you still there? </h1>
							<h4 className="popupMessage">Your session is about to expire</h4>
							<div className="bar">
								<div className="in"></div>
							</div> 
							<div className="actions">
								<button
									className="buttons"
									onClick={() => {close(); this.setState({logOutTrigger: true})}} > 
														Logout
								</button>
								<button
									className="buttons"
									onClick={() => {this.timerReset(); close();}}>
								I'm here
								</button>
							</div>
						</div>
					)}
				</Popup> 	);
			

		return (
			<div >
				<div className="WelcomeUser_Logout" >
					<h2 className="userName"> Welcome {userName}! </h2>
					<button className="logoutButton" ref = {logOutPopUpTrigger} onClick={() => this.setState({logOutTrigger: true})} > Log Out </button>
				</div>
				<Header/>
				<div className="printDiv">
					<ReactToPrint
          trigger={() => <button 	className="printButton" hidden={this.state.hideLoadedCoupons}>PRINT</button>}
          content={() => this.componentRef}
        />
				</div>	
				
				<div className="AllCoupons">
					<ul>
						<li> <a  className={this.state.activeNewCoupons} onClick={this.NewCoupons} > New Coupons </a></li>
						<li> <a  className={this.state.activeLoadedCoupons} onClick={this.LoadedCoupons}> Loaded Coupons </a></li>
						{/* <div className="filter_sort">
							Sort
							<img className="image_arrow" src={slideArrow_Sort[0]}  onClick={this.Sort}/>
							<div className="filter_sort_list" hidden= {this.state.sort_arrow} >By Recommended</div>
						</div>
						{ this.Sorting_Category() }
						<div className="filter_inside" hidden= {!this.state.sort_arrow}>
							<input name="_filter" type="checkbox" defaultChecked/>
							<label>
		  						Recommended
        					</label>
						</div>
						<div className="filter_sort">
							Filter
							<img className="image_arrow" src={slideArrow[0]}  onClick={this.Filter}/>
							<div className="filter_sort_list" hidden= {this.state.filter_arrow} >No filter added</div>
						</div>
						{ this.Filter_Category() } */}
					</ul>
					{popUpLogout}
					{sessionEndPopUp}
					<div className="LoadedCoupons"  hidden={this.state.hideNewCoupons}   >
						<div className="CouponSearch">
						<div className="SearchBarImage">
                            <img className="SearchImage" src={Search_Icon} />
                            <input type="text" className = "SearchBar" placeholder="Search"
								   onChange ={this.inputChange}
								   onClick={this.timerReset}/>
                        </div> 
						<h4 className="LoadedCouponCount"> Available Coupons ({couponsLength}) </h4>
						</div>
						<div onClick={this.newXyz}>
						<CouponCards  />
						</div>
					</div>
					<div className="LoadedCoupons"  hidden={this.state.hideLoadedCoupons} ref= {el => (this.componentRef = el)} >
						<h4 className="LoadedCouponCount"> Loaded Coupons ({couponsLength}) </h4>
						{/* {userCoupons}         */}
					</div>
				</div> 
			</div>
		);
	}
}

const mapStateToProps=(state)=>{
 	return {
		 data : state.UserIdentification.couponDetails,
	}
}

const mapDispatchToprops = (dispatch) => (
	{
	displayCouponState : (updatedValue) => displayCouponState(dispatch, updatedValue),
	updateCoupons :( updatedValue)=> updateCoupons(dispatch,  updatedValue )

}
)
export default connect(mapStateToProps,mapDispatchToprops)(Coupons);