// App.js

import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import HomePage from './screen/homePage';
import DepartmentPage from './screen/department';
import CareerPage from './screen/career';
import Eservicres from './screen/eservice';
import SignUp from './screen/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
