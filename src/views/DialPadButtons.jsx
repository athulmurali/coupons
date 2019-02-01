import React, { Component } from "react";
class DialPadButtons extends Component{
	render(){
		return(
			<div id="container">
				<ul id="keyboard"  >   
					<li className="letter" onClick={this.props.handleTheKeyClicks}>1</li>  
					<li className="letter" onClick={this.props.handleTheKeyClicks}>2</li>  
					<li className="letter" onClick={this.props.handleTheKeyClicks}>3</li>  
					<li className="letter clearl" onClick={this.props.handleTheKeyClicks}>4</li>  
					<li className="letter" onClick={this.props.handleTheKeyClicks}>5</li>  
					<li className="letter" onClick={this.props.handleTheKeyClicks}>6</li> 
					<li className="letter clearl" onClick={this.props.handleTheKeyClicks}>7</li>  
					<li className="letter " onClick={this.props.handleTheKeyClicks}>8</li>  
					<li className="letter" onClick={this.props.handleTheKeyClicks}>9</li> 
					<li className="letter clearl"></li>
					<li className="letter" onClick={this.props.handleTheKeyClicks}>0</li>
					<li className="letter" onClick= {this.props.deleteTheLastDigit}>&lt;</li>    
					<li className="switch" onClick={this.props.checkPhoneNumber}>Submit</li> 
				</ul>
			</div>
		);
	}
}

export default DialPadButtons;