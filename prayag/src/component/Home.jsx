import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Button,Table } from 'react-bootstrap';
import Slider from './Slider';
import  Header  from "./Header";
import  Footer  from "./Footer";

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Home extends Component {
    state = {  };
    handleClick() {
        alert("Here");
        this.props.history.push('/');
      }
      onClick = () => this.props.history.push("/Search");
      
    render() { 
        return (
            <div> 
                <Header/>    
                <Slider/> 
                    
                <div>
                <section id="about-us" className="about-us">
                        <div className="container" data-aos="fade-up">                   
                            <div className="row content">

                                <div className="row" style={{margin:15}}>
                                    <div className="col-lg-3 col-md-3" style={{paddingRight: 5,paddingLeft: 5}}>
                                        <Card style={{margin:2,paddingRight: 5,paddingLeft: 5,height:'100%',backgroundColor: '#9e4827',color: 'white'}}>
                                            <Card.Body>
                                                <Card.Title>Best Price Guaranteed</Card.Title>
                                                <Card.Text style={{textAlign:'justify'}}>
                                                   We guaranteed that we have very best and low price rate
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>                                     
                                    </div>
                                    <div className="col-lg-3 col-md-3" style={{paddingRight: 5,paddingLeft: 5}}>
                                        <Card style={{margin:2,paddingRight: 5,paddingLeft: 5,height:'100%',backgroundColor: '#04579b',color: 'white'}}>
                                        <Card.Body>
                                            <Card.Title>24/7 Customer Care</Card.Title>
                                            <Card.Text style={{textAlign:'justify'}}>
                                            Our service is on 24/7 hours you can call us any time.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                    </div>
                                    <div className="col-lg-3 col-md-3" style={{paddingRight: 5,paddingLeft: 5}}>
                                        <Card style={{margin:2,paddingRight: 5,paddingLeft: 5,height:'100%' ,backgroundColor: '#d3663b',color: 'white'}}>
                                        <Card.Body>
                                            <Card.Title>Home Pickups</Card.Title>
                                            <Card.Text style={{textAlign:'justify'}}>
                                                We Provide pickup and drop to your selected point. like home or office.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                    </div>
                                    <div className="col-lg-3 col-md-3" style={{paddingRight: 5,paddingLeft: 5}}>
                                        <Card style={{margin:2,paddingRight: 5,paddingLeft: 5,height:'100%',backgroundColor: '#4b4b4b',color: 'white'}}>
                                        <Card.Body>
                                            <Card.Title>Easy Bookings</Card.Title>
                                            <Card.Text style={{textAlign:'justify'}}>
                                                We have very easy and simple booking process 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card> 
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    
                <section id="pricing" className="pricing">

                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                                <h2>Regular Trips
                                <FontAwesomeIcon className='fas fa-star'  />
                                <span className="fa fa-envelope-open"></span>
                                </h2>
                                
                            </div>
                        <div className="row">                    
                                    
                                                
                                    <div className="col-lg-4 col-md-4" style={{marginTop:20,paddingRight: 5,paddingLeft: 5}}>
                                        
                                        <Card>
                                            <Card.Img variant="top" src="assets/img/ertiga1.png" style={{height:200}}/>
                                            <Card.Body>
                                                <Card.Title>Mumbai To Pune ..</Card.Title>
                                                <div style={{color:'red'}}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                </div>
                                                <Card.Text>
                                                Mumbia To Pune.
                                                </Card.Text>
                                                
                                                <div className="row">
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}><i className="fa fa-inr" aria-hidden="true"></i>1500</div>
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Luxury</div>
                                                    <div className="col-6" style={{textAlign:"end"}}>
                                                        <Button onClick={this.onClick} variant="primary" size='small' style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Book Now</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>                                   
                                    </div> 
                                    <div className="col-lg-4 col-md-4" style={{marginTop:20,paddingRight: 5,paddingLeft: 5}}>                                        
                                        <Card>
                                            <Card.Img variant="top" src="assets/img/innova2.png" style={{height:200}}/>
                                            <Card.Body>
                                                <Card.Title>Pune To Mumbai</Card.Title>
                                                <div style={{color:'red'}}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                </div>
                                                <Card.Text>
                                                Pune To Mumbai
                                                </Card.Text>                                                
                                                <div className="row">
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}><i className="fa fa-inr" aria-hidden="true"></i>1500</div>
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Luxury</div>
                                                    <div className="col-6" style={{textAlign:"end"}}>
                                                        <Button onClick={this.onClick} variant="primary" size='small' style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Book Now</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>                                   
                                    </div>  
                                    <div className="col-lg-4 col-md-4" style={{marginTop:20,paddingRight: 5,paddingLeft: 5}}>                                        
                                        <Card>
                                            <Card.Img variant="top" src="assets/img/swft1.jpg" style={{height:200}} />
                                            <Card.Body>
                                                <Card.Title>Pune To Aurangabad</Card.Title>
                                                <div style={{color:'red'}}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                </div>
                                                <Card.Text>
                                                Pune To Aurangabad
                                                </Card.Text>                                                
                                                <div className="row">
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}><i className="fa fa-inr" aria-hidden="true"></i>4000</div>
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Compact</div>
                                                    <div className="col-6" style={{textAlign:"end"}}>
                                                        <Button onClick={this.onClick} variant="primary" size='small' style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Book Now</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>                                   
                                    </div>  
                                    <div className="col-lg-4 col-md-4" style={{marginTop:20,paddingRight: 5,paddingLeft: 5}}>                                        
                                        <Card >
                                            <Card.Img variant="top" src="assets/img/innova2.png" style={{height:200}} />
                                            <Card.Body>
                                                <Card.Title>Mumbai To Auragabad</Card.Title>
                                                <div style={{color:'red'}}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                </div>
                                                <Card.Text>
                                                Mumbai To Auragabad
                                                </Card.Text>                                                
                                                <div className="row">
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}><i className="fa fa-inr" aria-hidden="true"></i>5000</div>
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Luxury</div>
                                                    <div className="col-6" style={{textAlign:"end"}}>
                                                        <Button onClick={this.onClick} variant="primary" size='small' style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Book Now</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>                                   
                                    </div>  
                                    <div className="col-lg-4 col-md-4" style={{marginTop:20,paddingRight: 5,paddingLeft: 5}}>                                        
                                        <Card >
                                            <Card.Img variant="top" src="assets/img/swiftd1.png" style={{height:200}} />
                                            <Card.Body>
                                                <Card.Title>Mumbai To Surat</Card.Title>
                                                <div style={{color:'red'}}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                </div>
                                                <Card.Text>
                                                Mumbai To Surat
                                                </Card.Text>                                                
                                                <div className="row">
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}><i className="fa fa-inr" aria-hidden="true"></i>
                                                    8000</div>
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Sedan</div>
                                                    <div className="col-6" style={{textAlign:"end"}}>
                                                        <Button onClick={this.onClick} variant="primary" size='small' style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Book Now</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>                                   
                                    </div>  
                                    <div className="col-lg-4 col-md-4" style={{marginTop:20,paddingRight: 5,paddingLeft: 5}}>                                        
                                        <Card>
                                            <Card.Img variant="top" src="assets/img/ertiga2.png"  style={{height:200}} />
                                            <Card.Body>
                                                <Card.Title>Mumbai To Bhopal</Card.Title>
                                                <div style={{color:'red'}}>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                </div>
                                                <Card.Text>
                                                Mumbai To Bhopal
                                                </Card.Text>                                                
                                                <div className="row">
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}><i className="fa fa-inr" aria-hidden="true"></i>11000</div>
                                                    <div className="col-3" style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Luxury</div>
                                                    <div className="col-6" style={{textAlign:"end"}}>
                                                        <Button variant="primary" size='small' style={{padding: "4px",fontSize: 12, textAlign: "center"}}>Book Now</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>                                   
                                    </div>        
                       </div>

                    </div>
                    
                </section>
                 
                    <section id="features" className="features">
                        <div className="container" data-aos="fade-up">  
                            <div className="section-title"></div>
                            <div className='row'>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                    <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
                                    <h3><a href="">Less than AED 10 million</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                    <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
                                    <h3><a href="">Between AED 10 million to AED 50 million</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                    <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
                                    <h3><a href="">Between AED 50 million to AED 99 million</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                    <i className="ri-store-line" style={{color: '#ffbb2c'}}></i>
                                    <h3><a href="">Above AED 100 million</a></h3>
                                    </div>
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
 
export default Home;