import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Home/Login/Login/Login';
import SignUp from './Pages/Home/Login/SignUp/SignUp';
import RequiredAuth from './Pages/Home/Login/RequeiredAuth/RequiredAuth/RequiredAuth';
import Checkout from './Pages/Home/Checkout/Checkout';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path ='/' element ={<Home></Home>}></Route>
      <Route path ='/about' element={<About></About>}></Route>
      <Route path ='/services' element={Services}></Route>
      <Route path ='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      <Route path ='/checkout' element={
        <RequiredAuth>
          <Checkout></Checkout>
        </RequiredAuth>
      }></Route>
      
      <Route path ='/addToService' element={<AddService></AddService>}></Route>

      <Route path ='login' element={<Login></Login>}></Route>
      <Route path ='/signup' element={<SignUp></SignUp>}></Route>
      <Route path ='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
