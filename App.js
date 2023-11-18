
import './App.css';
import Navbar from './Components/Navbar';
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import Socialicons from './Components/Socialicons';
import Krishna from './Components/Krishna';
import Car from './Components/Car';
import Bike from './Components/Bike';
import Nature from './Components/Nature';
import Places from './Components/Places';
import Try from './Components/Try';
import All from './Components/All';


function App() {
  return (
    <>
     {/* <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
       
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter> */}
    

<BrowserRouter>
       <Socialicons></Socialicons>
       <Try></Try>
       <Routes>
          <Route path="/" element={<All/>}></Route>
          <Route path="/krishna" element={<Krishna/>}></Route>
          <Route path="/car" element={<Car/>}></Route>
          <Route path="/bike" element={<Bike/>}></Route>
          <Route path="/nature" element={<Nature/>}></Route>
          <Route path="/places" element={<Places/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
