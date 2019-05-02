import ReactToPrint from "react-to-print";
import React from "react";

export const PrintComponent = (props) =>{
	return(
		<div className="printDiv">
			<ReactToPrint

				trigger={() => <button 	className="printButton" hidden={true}>PRINT</button>}
				content={() => props.componentRef}
			/>
		</div>
	);
};

export default PrintComponent;
