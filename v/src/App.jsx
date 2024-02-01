import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './assets/Home';
import About from './assets/About';
import Work from './assets/Work';
import Contact from './assets/Contact';
function App() {
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Work' element={<Work/>}></Route>
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App;
