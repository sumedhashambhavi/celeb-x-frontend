import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/index'
import Workspace from './components/workspace';
import About from './page/aboutus';
import Contact from './page/contactus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Workspace />}></Route>
          <Route path='/about-us' element={<About />}></Route>
          <Route path='/home' element={<Workspace />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
        </Routes>
        {/* <Workspace/> */}
      </Router>
    </div>
  );
}

export default App;
