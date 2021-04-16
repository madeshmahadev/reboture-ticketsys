import Home from './Pages/HomepageLayout'
import Clientlogin from './Pages/Client'
import ClientDashboard from '../Client/Dashboard'

import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      		  <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/client/login" component={Clientlogin} exact />
              <Route path="/client/dashboard" component={ClientDashboard} exact />


            </Switch>
    </>
  );
}

export default App;
