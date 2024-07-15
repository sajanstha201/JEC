import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Routes, Route} from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import Header from './components/NavBar/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/contact-us' element={<ContactUsPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
