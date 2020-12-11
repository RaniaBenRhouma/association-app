import './App.css';
import NavBar from "./components/acceuil/navbar";
import MainPage from "./components/acceuil/mainPage";
import Footer from "./components/acceuil/footer";
import Dashboard from "./components/compte/DashbordUser";
import DashboardAdmin from "./components/compte/DashboardAdmin";
import Parameter from "./components/compte/parameterProfil";
import SignUp from './components/signLogIn/signup'
import LogIn from './components/signLogIn/logIn'
import EventPage from "./components/events/eventPage";
import Forum from "./components/forum/forum";
import PrivateRoute from "./components/routeTypes/privateRoute";
import PrivateAdminRoute from './components/routeTypes/privateAdminRoute';
import PublicRoute from "./components/routeTypes/publicRoute";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Parameter from "./components/compte/parameterProfil";


function App() {
  return ( <Router>
    <div className="App">
      
    <NavBar />

      <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/logIn" component={LogIn}/>

      <PrivateRoute component={Dashboard} exact path="/profile/:id" />

      {/* <Route exact path="/profile/:id" component={Dashboard}/> */}
      <PrivateAdminRoute component={DashboardAdmin} exact path="/admin" />

      {/* <Route exact path="/admin" component={DashboardAdmin}/> */}
      <PublicRoute component={Forum} restricted={true}  path="/forum" />
      <PublicRoute component={EventPage} restricted={true} path="/events" />

      {/* <Route path="/forum" component={Forum}/> */}
      {/* <Route path="/events" component={EventPage}/> */}
      {/* <Route path="/parameter" component={Parameter}/> */}
      
      </Switch>

    <Footer />

    </div>
    </Router> );
}

export default App;
