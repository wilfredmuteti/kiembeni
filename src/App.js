
import "./App.scss"
import Home from "./pages/home/Home";
import Shop from "./pages/Shop";
import Mail from "./pages/mail/Mail";
import Serves from "./pages/services_page/ServesPage"
import Staff from "./pages/userList/UserList"
import Explore from "./pages/explore/Explore"
import Analytics from "./pages/analytics/Analytics";
import User from "./pages/user/User";
import NavBar from "./components/navbar/Navbar";
import Login from "./pages/login/Login"
import Transactions from "./pages/transactions/Transactions"
import Reports from "./pages/reports/Reports";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App () {
  return (  
<Router>
  <NavBar/>
<Route path = "/login">
      <Login/>
      </Route>
<div className="maincontainer">
<Switch>
<Route exact path = "/">
      <Home/>
      </Route>
      <Route path = "/shop">
      <Shop/>
      </Route>
      <Route path = "/mail">
      <Mail/>
      </Route>
      <Route path = "/services">
      <Serves/>
      </Route>
      <Route path = "/staff">
      <Staff/>
      </Route>
      <Route path = "/explore">
      <Explore/>
      </Route>
      <Route path = "/analytics">
      <Analytics/>
      </Route>
      <Route path = "/user">
      <User/>
      </Route>
      <Route path = "/transactions">
      <Transactions/>
      </Route>
      <Reports path = "/reports">
      <Transactions/>
      </Reports>
      
</Switch>
</div>

</Router>
);
  
}

export default App;