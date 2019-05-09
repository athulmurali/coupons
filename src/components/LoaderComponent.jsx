import {RiseLoader} from "react-spinners";
import React from "react";

const styles = {
	containerStyle: {justifyContent: "center", alignItems: "center", display: "flex", height: "670px", fontSize: "21px"}
};
const LoaderComponent = () => (<div style={styles.containerStyle}>
	<RiseLoader size={20} color="#E0004D"/>
</div>);

export default LoaderComponent;
