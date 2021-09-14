import "./featuredInfof.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featuredf">
      <div className="featuredfItem">
        <span className="featuredfTitle">Planting Window</span>
        <div className="featuredfMoneyContainer">
          <span className="featuredfMoney">Aug 30th- Sep 18th</span>
          <span className="featuredfMoneyRate">
            2 days <ArrowDownward  className="featuredfIcon negative"/>
          </span>
        </div>
        <span className="featuredfSub">For Short-term Produce</span>
      </div>
      <div className="featuredfItem">
        <span className="featuredfTitle">Weather forecast</span>
        <div className="featuredfMoneyContainer">
          <span className="featuredfMoney">Sep 20th- 27th</span>
          <span className="featuredfMoneyRate">
            14 C <ArrowDownward className="featuredfIcon negative"/>
          </span>
        </div>
        <span className="featuredfSub">Long Rains Expected</span>
      </div>
      <div className="featuredfItem">
        <span className="featuredfTitle">Projected Harvest Window</span>
        <div className="featuredfMoneyContainer">
          <span className="featuredfMoney">Dec 20th - Jan 5th</span>
          <span className="featuredfMoneyRate">
            85% <ArrowUpward className="featuredfIcon"/>
          </span>
        </div>
        <span className="featuredfSub">Compared to last Harvest</span>
      </div>
    </div>
  );
}
