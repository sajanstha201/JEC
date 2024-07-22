import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Routes, Route} from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import Header from './components/NavBar/Header';
import Footer from './components/NavBar/Footer';
import Admission from './components/Admission/Admission';
import Academics from './components/Academics/Academics';
import Learnmore from './components/Academics/Learn-more';
import Facilities from './components/Facalities/Facilities';
import News from './components/News/News';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App w-full h-screen">
      
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/contact' element={<Contact/>}> </Route>
          <Route path='/news' element={<News/>}> </Route>
          <Route path='/facilities' element={<Facilities/>}> </Route>
          <Route path='/academic' element={<Academics/>}> </Route>
          <Route path='/admission' element={<Admission/>}> </Route>
          <Route path='/about-us' element={<AboutUsPage/>}> </Route>
          <Route path='/contact-us' element={<ContactUsPage/>}></Route>
          <Route path='/learn-more' element={<Learnmore/>}></Route>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
