// App.js

import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import HomePage from './screen/homePage';
import DepartmentPage from './screen/department';
import CareerPage from './screen/career';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './screen/signin'; 

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        {/* <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/department" component={DepartmentPage} />
          <Route path="/career" component={CareerPage} />
        </Switch>
        <Footer /> */}
         <Route exact path="/" component={SignInPage} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;

