import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './container/Header/Header';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import NavBar from './components/NavBar/NavBar'; 


function App() {
  return (
    <div className="App">
      <NavBar />
      test this shold work, we going to be a Unicorn test, and this works properly
      <Header />
      This is Dakshay Mehta
      <About  />
      Equity AI is going to work for sure
      <Footer />
    </div>
  );
}

export default App;