import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import AboutUs from './component/Home';
import Plans from './component/Plans';
import Servises from './component/Servises';
import Search from './component/Search';
import ConfirmBooking from './component/ConfirmBooking';
import ThankYou from './component/ThankYou';
import Login from './component/Login/Login';
import History from './component/User/History';
import Booking from './component/Admin/Booking';
import SearchLog from './component/Admin/SearchLog';
import BookingDetails from './component/User/BookingDetails';
function App() {
  return (
    
    <>
    <Switch>  
      <Route path='/Home/' component={Home}></Route>   
      <Route path='/Home' component={Home}></Route>   
      <Route path='/Plans' component={Plans}></Route> 
      <Route path='/Servises' component={Servises}></Route>  
      <Route path='/Login' component={Login}></Route>  
      <Route path='/History' component={History}></Route>  
      <Route path='/Booking' component={Booking}></Route>  
      <Route path='/SearchLog' component={SearchLog}></Route>  
      <Route path='/BookingDetails/:bookingId' component={BookingDetails}></Route>  
      <Route path='/ConfirmBooking/:data' component={ConfirmBooking}></Route>  
      <Route path='/ThankYou/:orderId' component={ThankYou}></Route>  
      <Route path='/Search/:pickup/:destination/:pickdate/:returnDate/:pickupLocation/:destinationLocation/:mobileNo' component={Search}></Route>
       
      <Header/>
    </Switch>
    </>
  );
}

export default App;
