import * as React from "react";
import {connect} from "react-redux";
import {iAmHere, signMeOut} from "../redux/actions/Timer";

 class Test extends React.Component{
	componentWillReceiveProps(nextProps, nextContext) {
		const props = nextProps
	}

	render(){
		return <div>
			<h1>Hola</h1>


		</div>

	}

}

const mapStateToProps = (state)=>(
 {
	isPopUpOpen : state.TimerReducer.isPopUpOpen
})

const mapDispatcherToProps =(dispatch)=>({
	iAmHere:(dispatch)=> iAmHere(dispatch),
	logMeOut :(dispatch)=>signMeOut(dispatch)



})

export default connect(mapStateToProps)(mapDispatcherToProps)