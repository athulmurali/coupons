import * as React from "react";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import LoadedIconImg from "../../assets/addedNew.svg";
import PlusIcon from "../../assets/addNew.svg";
import "../DisplayCouponComponent/DisplayCoupons.css";
import Proptypes from "prop-types";

const styles = {
	container: {
		width: "260px",
		height: "343px",
		padding: "30",
	},
	backSide: {
		backgroundColor: "white",
		color: "black",
		width: "260px",
		height: "399px",
	},
	frontSide: {
		backgroundColor: "white",
		width: "260px",
		height: "399px",
	},
	frontSideDescription: {minHeight: "88px", maxHeight: "88px"}

};

const initialState = {isFlipped: false, isLoaded :false};

 class CouponCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {...initialState};
	}

	componentDidMount() {
		console.log("Mounted : ")
	}

	componentWillReceiveProps(nextProps, nextContext) {
		// In this component , it must be restored to the original state as the only possibility is when parent
		// gets re-rendered

		if (this.state.isFlipped)
			this.setState({isFlipped : false},()=>console.log("unFlipped!"))
	}

	 handleLoadCoupon = async (coupon, e, index) => {
		e.stopPropagation();
		if (!this.state.isLoaded) {
			this.state.isLoaded = true;
			this.setState({isLoaded :true},
				this.props.loadCoupon(this.props.loyaltyNumber, coupon.id, coupon.source));
		}
	};

	flipCard = () => {
		console.log("Flipping")
		const isFlipped = this.state.isFlipped;
		const nextFlipState = !isFlipped;
		this.setState({ isFlipped : nextFlipState});
	};

	componentWillUnmount() {
		console.log("UnMounting");
		this.setState({ isFlipped : false});

	}


	 render() {
		const coupon = this.props.coupon;
		if (!coupon) return null;
		return <div className="Cards" onClick={() => this.flipCard()}>
			<Flippy
				isFlipped={this.state.isFlipped}
				flipOnHover={false} // default false
				flipOnClick={false} // default false
				flipDirection="horizontal" // horizontal or vertical
				// ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
				style={styles.container}>
				<BackSide
					style={styles.backSide}>
					<h5 className="couponTitle"> {coupon.title}</h5>
					<h5 className="couponName"> {coupon.name}</h5>
					<h5 className="couponCategory"> {coupon.couponCategory}</h5>
					<div className="couponDescription">{coupon.description} <br/> <br/> {coupon.legalText} </div>
					<h6 className="viewMore"> View less </h6>
					<div className="plusIcon" onClick={(e) => this.handleLoadCoupon(coupon, e)}>
						<img className="addCheck" height="56px" width="56px"
							 src={!!this.state.isLoaded || !!this.props.inLoadedScreen ? LoadedIconImg : PlusIcon}
							 alt="plus sign unable to load"/>
					</div>
				</BackSide>

				<FrontSide style={styles.frontSide}>
					<img src={coupon.url} width="80px" height="100px" alt="image_image"/>
					<h5 className="couponTitle"> {coupon.title}</h5>
					<h5 className="couponName"> {coupon.name}</h5>
					<h6 className="couponDescription"
						style={styles.frontSideDescription}> {coupon.description} </h6>
					<h6 className="expireDate"><span className="expire">Exp:</span>{coupon.expirationDate.slice(0, 10)}
					</h6>
					<h6 className="viewMore"> View more </h6>
					<div className="plusIcon" onClick={(e) => this.handleLoadCoupon(coupon, e)}>
						<img className="addCheck" height="56px" width="56px"
							 src={!!this.state.isLoaded || !!this.props.inLoadedScreen
								 ? LoadedIconImg : PlusIcon} alt="plus sign unable to load"/>
					</div>
				</FrontSide>
			</Flippy>
		</div>;
	}

}

CouponCard.propTypes={
	coupon: Proptypes.object.isRequired,


}
export default CouponCard ;
