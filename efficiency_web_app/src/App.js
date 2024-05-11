// App.js

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import CareerPage from './screen/career';
import ContactUs from './screen/contactUs/ContactUs';
import DepartmentPage from './screen/department';
import Eservicres from './screen/eservice';
import HomePage from './screen/homePage';
import MediaCenter from './screen/mediaCenter/MediaCenter';
import SignUp from './screen/signup';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/department" component={DepartmentPage} />
          <Route path="/career" component={CareerPage} />
          <Route path="/eservice" component={Eservicres} />
          <Route path="/signup" component={SignUp} />
          <Route path="/media-center" component={MediaCenter} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
