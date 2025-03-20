
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './component/Footer';
import NavbarComponent from './component/NavbarComponent';

import Home from './component/Home';

import Tailoring from './component/Tailoring';
import Coursedetail from './component/Coursedetail';

//import Coursedescrip from './component/Coursedescrip';

function App() {
  return (
    <div className="App">
     <NavbarComponent/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Tailoring' element={<Tailoring/>}/>
      <Route path='/Coursedetail' element={<Coursedetail/>}/>
    {/*   <Route path='/Coursedescrip' element={<Coursedescrip/>}/> */}
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
