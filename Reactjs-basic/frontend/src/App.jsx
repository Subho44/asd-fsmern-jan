
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Navbardata from './components/Navbardata';
import Header from './components/Header';

const App =()=> {

  return <>
   <BrowserRouter>
   <Header/>
   <Navbardata/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About name="jwt vtk" location="kolkata"/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/service' element={<Service/>}></Route>
   </Routes>
   
   
   </BrowserRouter>
  
  </>
}
 export default App;