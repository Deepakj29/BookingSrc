import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Template } from './pages/template/Template';
import {Home} from './pages/home/Home';
import {About} from './pages/about/About';
import { Room } from './pages/room/Room';
// import Navbar from './components/navbar/Navbar';
import{Contact} from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  element={<Template/>}>
        <Route path='/' index element={<Home/>}/>
        <Route exact path='/About'element={<About/>}/>
        <Route exact path='/Room'element={<Room/>}/>
        <Route exact path='/Contact'element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}
export default App;
