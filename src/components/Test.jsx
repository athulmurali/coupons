import * as React from "react";
import {connect} from "react-redux";
import {iAmHere, signMeOut, startTimer} from "../redux/actions/Timer";
import LogOutPromptPopup from "./TimedComponents/LogOutPromptPopup";
import LogOutSuccessPopUp from "./TimedComponents/LogOutSuccessPopUp";

 class Test extends React.Component{
	componentWillReceiveProps(nextProps, nextContext) {

		if (nextProps.isTimedOut){
			window.location.reload(true);
		}
	}
	componentDidMount() {
		this.props.startTimer()
	}

	 render(){
		return <div>
			<h4>Timer test</h4>
			<h6> Rendered lastly on : {(new Date()).toString()}</h6>
			<LogOutPromptPopup/>
			<LogOutSuccessPopUp/>
			<button onClick={this.props.signMeOut}> Log me out! </button>
		</div>

	}

}

const mapStateToProps = (state)=>{

 	console.log(state.TimerReducer.showLogOutPrompt)
 	return {}
};

const mapDispatcherToProps =(dispatch)=>({
	iAmHere:(dispatch)=> iAmHere(dispatch),
	signMeOut :()=>signMeOut(dispatch),
	startTimer:()=>startTimer(dispatch)
});

export default connect(mapStateToProps , mapDispatcherToProps)(Test)
