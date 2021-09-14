import "./services.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import imagesc1 from "../../media/assets/sale-svgrepo-com.svg"
import imagesc3 from "../../media/assets/rent-svgrepo-com.svg"
import imagesc2 from "../../media/assets/head-svgrepo-com.svg"
export default function Services() {
  return (
    <div className="servicecard">
      <div className="serviceItem" style={{"background-color":"teal"}}>
        <span className="serviceTitle">sale produce</span>
        <img className="serviceImg" src={imagesc1} alt=""></img>
        </div>
      <div className="serviceItem" style={{"background-color":"lightcoral"}}>
        
        <span className="serviceTitle">Book An Expert</span>
        <img className="serviceImg" src={imagesc2} alt=""></img>
      </div>
      <div className="serviceItem" style={{"background-color":"crimson"}}>
        
        <span className="serviceTitle">Lease your farm</span>
        <img className="serviceImg" src={imagesc3} alt=""></img>
      </div>
    </div>
  );
}