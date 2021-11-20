import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Button,Table } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'
import Slider from './Slider';
import  Header  from "./Header";
import  Footer  from "./Footer";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class ConfirmBooking extends Component {
    //state = {  }
    /*
        {"id":2,"cabType":"Luxury","image":"/assets/img/ertiga2.png","ac":"Y","bags":3,"cars":"Audi,BMW,Toyota Innova Crysta, Mercedes-Benz E-Class",
        "capacity":4,"note":"Excluding Toll-Tax, Parking,",
        "amount":14553,"journyTime":"9 hours 47 mins","discountAmount":1323,"finalAmount":13230,
        "mobileNo":"7722055354","pickupCity":"Pune, Maharashtra, India","destinationCity":"Nanded, Maharashtra, India",
        "pickupDate":"2021-4-1 21:00:00","returnDateTime":"undefined","originlat":18.5204303,"originlng":73.8567437,
        "destinationlat":19.1382514,"destinationlng":77.3209555,"distance":441}
    */
    state = {item:[],id:'',cabType:'',image:'',ac:'',bags:'',cars:'',capacity:'',note:'',amount:0,journyTime:'',
    discountAmount:0,finalAmount:0,mobileNo:'',pickupCity:'',destinationCity:'',pickupDate:'',returnDateTime:'',originlat:0.0,
    originlng:0.0,destinationlat:0.0,destinationlng:0.0,distance:0,firstName:'',lastName:'',email:'',error:''};
    constructor(props) {
        super(props);    
        //console.log("++pickup**********==="+JSON.stringify(this.props));    
      }
    
      componentDidMount() {
          
        console.log("++pickup**********==="+JSON.stringify(this.props.location.dataObj)+"****"+this.props.location.dataObj.pickupCity);
        this.setState({item:this.props.location.dataObj});
        this.setState({pickupCity:this.props.location.dataObj.pickupCity});
        //this.setState({item:this.props.match.params.data});
      }
    setFirstName =(fname)=>{
        this.setState({firstName:fname.target.value});
    }
    
    setLastName =(lname)=>{
        this.setState({lastName:lname.target.value});
    }
    
    setEmail =(uemail)=>{
        this.setState({email:uemail.target.value});
    }
    async confirm(){
        console.log("***********");    
        const headers = { 'Content-Type': 'application/json' }  
        let returnDate=this.state.item.returnDateTime;
        let isReturn='Y';
        if(returnDate=="" || returnDate==undefined  || returnDate=='undefined'){
            returnDate='';
            isReturn='N';
        }
          let urlData="&fname="+this.state.firstName+"&lname="+this.state.lastName+"&email="+this.state.email+"&cabId="+this.state.item.id+"&pickup="+this.state.item.pickupCity+"&destination="+this.state.item.destinationCity+"&pickupDate="+this.state.item.pickupDate+"&returnDate="+returnDate+"&isReturn="+isReturn+"&pickupLat="+this.state.item.originlat+"&pickupLong="+this.state.item.originlng+"&destinationLat="+this.state.item.destinationlat+"&destinationLong="+this.state.item.destinationlng+"&distance="+this.state.item.distance+"&journyTime="+this.state.item.journyTime+"&cabType="+this.state.item.cabType+"&ac="+this.state.item.ac+"&bags="+this.state.item.bags+"&cars="+this.state.item.cars+"&capacity="+this.state.item.capacity+"&note="+this.state.item.note+"&rate="+this.state.item.rate+"&amount="+this.state.item.amount+"&discountAmount="+this.state.item.discountAmount+"&finalAmount="+this.state.item.finalAmount+"&mobileNo="+this.state.item.mobileNo+"&bookingId="+this.state.item.bookingId;
          //const response = await fetch('http://localhost:3001/booking/getCabs?originObj='+originObj+'&destinationObj='+destinationObj, { headers });
          console.log("urlData=="+urlData)
          const response = await fetch('http://localhost:3001/booking/book_cab?'+urlData, { headers });
          console.log("+++response=="+response)
          const data = await response.json();
          console.log("Data="+JSON.stringify(data));
          if(data.code==200){
              //alert("Thank you, Your bokking is confimed");
              window.location.href="/ThankYou/"+this.state.item.bookingId;
          }else{
              this.setState({error:'some internal error please try later'})
          }
          //this.setState({cabsList:data.data});
    }
    render() { 
        
        return (
            
            <div> 
                <Header/> 
                
                <div> 
                <section id="pricing" className="pricing">

                    <div className="container" data-aos="fade-up" style={{width:'95%!important'}}>
                        
                        <div className="row">   
                    
                            <div className="col-lg-7 col-md-7">
                                    
                                    <Card>
                                            <Card.Title style={{fontSize:16,padding:10,color:'white',backgroundColor:'gray'}}>Booking Confirmation </Card.Title>
                                        <Card.Body>
                                            <div style={{color:'red'}}>
                                                {this.state.error}
                                            </div>
                                            <div className="col-12">
                                                <Form.Group controlId="formBasicEmail" >
                                                    <Form.Label>Mobile No</Form.Label>
                                                    <Form.Control type="text" disabled placeholder="Mobile No" value={this.state.item.mobileNo} />                                                                                                        
                                                </Form.Group>
                                            </div>
                                            
                                            <div className="col-12">
                                                <Form.Group controlId="formBasicEmail" >
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="First name" onChange={this.setFirstName} />                                                                                                        
                                                </Form.Group>
                                            </div>
                                            
                                            <div className="col-12">
                                                <Form.Group controlId="formBasicEmail" >
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Last name" onChange={this.setLastName} />                                                                                                        
                                                </Form.Group>
                                            </div>
                                            
                                            <div className="col-12">
                                                <Form.Group controlId="formBasicEmail" >
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" placeholder="Email" onChange={this.setEmail} />                                                                                                        
                                                </Form.Group>
                                            </div>
                                            
                                            <div className="col-12">
                                                <Form.Group controlId="formBasicEmail" style={{float:'right'}}>
                                                    <Button variant="primary" type="button" onClick={this.confirm.bind(this)}>
                                                        Confirm
                                                    </Button>                                                                                                       
                                                </Form.Group>
                                            </div>
                                            
                                        </Card.Body>
                                    </Card>                                   
                            </div>             
                            <div className="col-lg-5 col-md-5">
                            <Card>
                                    <Card.Title style={{fontSize:16,padding:10,color:'white',backgroundColor:'gray'}}>Booking Details </Card.Title>
                                        <Card.Body>
                                        
                                            <div className="row">
                                                <div className="col-6">BookingId</div>
                                                <div className="col-6">{this.state.item.bookingId}</div>
                                            </div>                                            
                                            <div className="row">
                                                <div className="col-6">Pickup</div>
                                                <div className="col-6">{this.state.pickupCity}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Destination</div>
                                                <div className="col-6">{this.state.item.destinationCity}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Pickup Date</div>
                                                <div className="col-6">{this.state.item.pickupDate}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Return Date</div>
                                                <div className="col-6">{this.state.item.returnDateTime}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Cab Type</div>
                                                <div className="col-6">{this.state.item.cabType}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">AC</div>
                                                <div className="col-6">{this.state.item.ac}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Bags</div>
                                                <div className="col-6">{this.state.item.bags}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Capacity</div>
                                                <div className="col-6">{this.state.item.capacity}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Amount</div>
                                                <div className="col-6">{this.state.item.amount}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Total</div>
                                                <div className="col-6">{this.state.item.finalAmount}</div>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-12" style={{color:"green",fontSize:14}}>Cars: {this.state.item.cars}</div>
                                            </div>
                                            <div className="row" style={{color:"#e738eb",fontSize:14}}>
                                                <div className="col-12">Journy: {this.state.item.distance}KM  ({this.state.item.journyTime})</div>
                                            </div>
                                            <div className="row" style={{color:"red",fontSize:14}}>
                                                <div className="col-12">Note: <span >{this.state.item.note}</span></div>
                                            </div>
                                            
                                        </Card.Body>
                                    </Card>
                            </div>
                        </div>

                    </div>
                    
                </section>
                 
                    
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default ConfirmBooking;