
import "./home.scss";
import Finfo from "../../components/featuredInfo/FeaturedInfo";
import Featuredinfo from "../../components/featuredInfoFarm/FeaturedInfo";
import WidgetSm from "../../components/widgetSmFarmer/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Calendar from "../../components/calendar/Calendar";

const Home = () => {
  return (
    <div className="home">
      <Calendar/>
      <Finfo />
      <Featuredinfo/>
      <div className="farmerWidgets">
        <WidgetSm/>
        <WidgetLg/>
       
      </div>
    </div>
  );
};

export default Home;