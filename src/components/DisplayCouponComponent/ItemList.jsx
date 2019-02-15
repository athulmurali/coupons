import ReactToPrint from "react-to-print";
import SortComponent from "../SortComponent";
import FilterComponent from "../FilterComponent/filterComponent"
const context = React.createContext();
const {Provider,Consumer} = context;

const SideBar = (props) => (
	<Consumer>
		{
			() => 
				<ul>
                        <li> <a  className={props.activeNewCoupons} onClick={props.NewCoupons} > New Coupons </a></li>
                        <FilterComponent/>
                        <SortComponent/>
                    </ul>
			
		}
	</Consumer>	
)

export default class AllCoupons extends Component{
	state={

	};
	render(){
		return(
			<Provider>
				{this.props.children}
			</Provider>
		);
	}
}