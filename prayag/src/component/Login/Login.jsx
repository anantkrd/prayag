import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Button,Table } from 'react-bootstrap';

import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Login extends Component {
    //state = {  }
    
    state = {item:[],id:'',bookingId:'',mobileNo:'',otp:'',isOtpSent:'N',error:''};
    constructor(props) {
        super(props);    
        //console.log("++pickup**********==="+JSON.stringify(this.props));
        this.setState({isOtpSent:'N'});
      }
    
      componentDidMount() {
        let userId=localStorage.getItem("userId");
        if(userId>0){
            window.location.href="/Home";            
        }
        console.log("++pickup**********==="+JSON.stringify(this.props.match.params.orderId));
        this.setState({bookingId:this.props.match.params.orderId});
        //this.setState({item:this.props.match.params.data});
      }
    setMobile=(mobile)=>{
        console.log("===="+mobile.target.value);
        this.setState({mobileNo:mobile.target.value});
    }
    setOtp=(otp)=>{
        this.setState({otp:otp.target.value});
    }
    async sendOtp(){
        let urlData="&mobileNo="+this.state.mobileNo;
        const headers = { 'Content-Type': 'application/json' }  
          //const response = await fetch('http://localhost:3001/booking/getCabs?originObj='+originObj+'&destinationObj='+destinationObj, { headers });
          console.log("urlData=="+urlData)
          const response = await fetch('http://localhost:3001/user/send_otp?'+urlData, { headers });
          console.log("+++response=="+response)
          const data = await response.json();
          console.log("Data="+JSON.stringify(data));
          if(data.code==200){
              //alert("Thank you, Your bokking is confimed");
              this.setState({isOtpSent:'Y'});
          }else{
            this.setState({isOtpSent:'N'});
              this.setState({error:'user not found'})
          }
    }
    async verifyOtp(){
        let urlData="&mobileNo="+this.state.mobileNo+"&otp="+this.state.otp;
        const headers = { 'Content-Type': 'application/json' }  
          //const response = await fetch('http://localhost:3001/booking/getCabs?originObj='+originObj+'&destinationObj='+destinationObj, { headers });
          console.log("urlData=="+urlData)
          const response = await fetch('http://localhost:3001/user/verify_otp?'+urlData, { headers });
          console.log("+++response=="+response)
          const data = await response.json();
          console.log("Data="+JSON.stringify(data));
          if(data.code==200){
              let userObj=data.data[0];
            localStorage.setItem("userId",userObj.id);
            localStorage.setItem("firstName",userObj.firstName);
            localStorage.setItem("lastName",userObj.lastName);
            localStorage.setItem("mobileNo",userObj.mobileNo);
            localStorage.setItem("email",userObj.email);
            localStorage.setItem("userType",userObj.userType);
            localStorage.setItem("token",userObj.token);
            
            
            window.location.href="/Home";
          }else{
            this.setState({isOtpSent:'N'});
              this.setState({error:'user not found'})
          }
    }
    render() { 
        
        return (
            
            <div> 
                
                <div> 
                <section id="pricing" className="pricing">
                    <div className="container" data-aos="fade-up" style={{width:'95%!important'}}>                        
                        <div className="row">                       
                            <div className="col-lg-12 col-md-12">                                    
                                    <Card>
                                        <Card.Title style={{fontSize:16,padding:10,color:'white',backgroundColor:'gray'}}>Login Now </Card.Title>
                                        <Card.Body>
                                            <div className="col-lg-12 col-md-12" style={{color:'red'}}>{this.state.error}</div>
                                            {
                                                this.state.isOtpSent=='N'?<div >
                                                    <div className="col-12">
                                                        <Form.Group controlId="formBasicEmail" >
                                                            <Form.Label>Mobile No</Form.Label>
                                                            <Form.Control name="mobileNo" value={this.state.mobileNo} type="text" placeholder="Mobile No" onChange={this.setMobile} />                                                                                                        
                                                        </Form.Group>
                                                    </div> 
                                                    <div className="col-12">
                                                        <Form.Group controlId="formBasicEmail" style={{float:'right'}}>
                                                            <Button variant="primary" type="button" onClick={this.sendOtp.bind(this)}>
                                                                Send Otp
                                                            </Button>                                                                                                       
                                                        </Form.Group>
                                                    </div>
                                                </div>:<div>
                                                    <div className="col-12">
                                                        <Form.Group controlId="formBasicEmail" >
                                                            <Form.Label>OTP</Form.Label>
                                                            <Form.Control name="otp" value={this.state.otp} type="text" placeholder="Otp" onChange={this.setOtp} />                                                                                                        
                                                        </Form.Group>
                                                    </div>
                                                    
                                                    <div me="col-12">
                                                        <Form.Group controlId="formBasicEmail" style={{float:'right'}}>
                                                            <Button variant="primary" type="button" onClick={this.verifyOtp.bind(this)}>
                                                                Verify Otp
                                                            </Button>                                                                                                       
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            }
                                            
                                            
                                        </Card.Body>
                                    </Card>                                   
                            </div> 
                        </div>
                    </div>
                    
                </section>
                 
                    
                </div>
            </div>
        );
    }
}
 
export default Login;