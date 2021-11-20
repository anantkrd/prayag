import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Button,Table } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'
import  Header  from "../Header";
import  Footer  from "../Footer";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ClipLoader from "react-spinners/ClipLoader";
class BookingDetails extends Component {
    
    state = {item:[],userType:'',id:'',error:'',bookingId:'',pickupDate:'0000-00-00 00:00:00',returnDate:'0000-00-00 00:00:00',isLoading:false,loadingColor:'#ffffff'};
    constructor(props) {
        super(props);    
        //console.log("++pickup**********==="+JSON.stringify(this.props));    
      }
    
      componentDidMount() {
        this.setState({isLoading:true});
        console.log("details**********==="+JSON.stringify(this.props));
        //this.setState({item:this.props.location.dataObj});
        this.setState({bookingId:this.props.match.params.bookingId});
        //this.setState({item:this.props.match.params.data});
        this.geetDetails(this.props.match.params.bookingId);
        let userType=localStorage.getItem("userType");
        this.setState({userType:userType});
      }
    
    async geetDetails(bookingId){
        console.log("***********");    
        //const headers = { 'Content-Type': 'application/json' }  
        let token=localStorage.getItem("token");
        const headers = {'Authorization':`Bearer ${token}`} ;  
          let urlData="bookingId="+bookingId;
          //const response = await fetch('http://localhost:3001/booking/getCabs?originObj='+originObj+'&destinationObj='+destinationObj, { headers });
          console.log("urlData=="+urlData)
          const response = await fetch('http://localhost:3001/user/get_booking_details?'+urlData, { headers });
          console.log("+++response=="+response)
          const data = await response.json();
          console.log("Data="+JSON.stringify(data));
          if(data.code==200){
              this.setState({item:data.data[0]});
              this.setState({pickupDate:data.data[0].pickupDate});
              this.setState({returnDate:data.data[0].returnDate})
          }else{
              this.setState({error:'some internal error please try later'})
          }
          this.setState({isLoading:false});
          //this.setState({cabsList:data.data});
    }
    sendBill(){
        console.log("Send bill");
    }
    render() {  
        const override =`
        display: block;
        margin: 0 auto;
        border-color: red;
        position: absolute;
        z-index: 9;
        margin: 0px auto;
        left: 40%;
        `;       
        return (
            
            <div> 
                <Header/> 
                
                <div> 
                <ClipLoader css={override} style={{borderColor:'red'}} color={this.state.loadingColor} loading={this.state.isLoading} 
                css={override} size={150} >  </ClipLoader>
                <section id="pricing" className="pricing">

                    <div className="container" data-aos="fade-up" style={{width:'95%!important'}}>
                        
                        <div className="row">   
                    
                            <div className="col-lg-6 col-md-6 col-sm-12" >
                                    
                                    <Card>
                                        <Card.Title style={{fontSize:16,padding:10,color:'white',backgroundColor:'gray'}}>User Details </Card.Title>
                                        <Card.Body>
                                            <div style={{color:'red'}}>
                                                {this.state.error}
                                            </div>
                                            <div className="row">
                                                <div className='col-4'>Name</div>
                                                <div className='col-8'>{this.state.item.userName}</div>
                                            </div>
                                            <div className="row">
                                                <div className='col-4'>Mobile No</div>
                                                <div className='col-8'>{this.state.item.mobileNo}</div>
                                            </div>                                           
                                            
                                        </Card.Body>
                                    </Card>                                   
                            </div>             
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            <Card>
                                    <Card.Title style={{fontSize:16,padding:10,color:'white',backgroundColor:'gray'}}>Booking Details </Card.Title>
                                        <Card.Body>
                                            <div className="row">
                                                <div className="col-6">BookingId</div>
                                                <div className="col-6">{this.state.item.orderId}</div>
                                            </div>                                            
                                            <div className="row">
                                                <div className="col-6">Pickup</div>
                                                <div className="col-6">{this.state.item.pickup}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Destination</div>
                                                <div className="col-6">{this.state.item.destination}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Pickup Date</div>
                                                <div className="col-6">
                                               
                                                    {this.state.pickupDate!="0000-00-00 00:00:00"?new Intl.DateTimeFormat('en-GB', { 
                                                                        month: 'long', 
                                                                        day: '2-digit',
                                                                        year: 'numeric', 
                                                                        hour:'numeric',
                                                                        minute:'numeric',
                                                                        hour12:true
                                                        }).format(new Date(this.state.pickupDate)):null
                                                    }
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Return Date</div>
                                                <div className="col-6">
                                                {this.state.returnDate!="0000-00-00 00:00:00"?new Intl.DateTimeFormat('en-GB', { 
                                                                        month: 'long', 
                                                                        day: '2-digit',
                                                                        year: 'numeric', 
                                                                        hour:'numeric',
                                                                        minute:'numeric',
                                                                        hour12:true
                                                        }).format(new Date(this.state.returnDate)):null
                                                    }
                                                </div>
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
                                                <div className="col-6">Discount</div>
                                                <div className="col-6">{this.state.item.discount}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Total</div>
                                                <div className="col-6" style={{fontWeight:700}}>{this.state.item.finalAmount}</div>
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
                                            {
                                                this.state.userType=='admin'?<div className="row" style={{color:"red",fontSize:14}}>
                                                    <div className="col-12">
                                                        <Button style={{float:'right'}} variant="primary" type="button" onClick={this.sendBill}>
                                                            Send Bill
                                                        </Button>
                                                    </div>
                                                </div>:null
                                            }
                                            
                                            
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
 
export default BookingDetails;