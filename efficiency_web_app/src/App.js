import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import HomePage from './screen/homePage';


function App() {
  return (
    <div className="App">
       <Header />
       <HomePage/>
       <Footer/>
    </div>
  );
}

export default App;
