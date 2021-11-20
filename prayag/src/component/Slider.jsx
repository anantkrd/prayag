import React, { Component } from 'react';
import {Tabs,Tab,Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { compareAsc, format } from 'date-fns'
import { useHistory } from "react-router-dom";
import { getDistance,getPreciseDistance } from 'geolib';

class Slider extends Component {
    state = { pickupTime:new Date(),returnTime:new Date(),pickupTimeSelected:new Date(),
      returnTimeSelected:new Date(),history:'',handleColor:'',pickupPlace:'',destinationPlace:'',pickupLatlng:{},destinationLatlng:{},
    distance:'',pickupLat:0.0,pickupLng:0.0,destinationLat:0.0,destinationLng:0.0,mobileNo:'' };
    constructor(props) {
      super(props);      
      this.state = {cabsList: [],pickup:'',destination:''};      
    }
    componentDidMount(){
     let  handleColor1 = time => {
        return time.getHours() > 12 ? "text-success" : "text-error";
      };
      this.setState({handleColor:handleColor1});
      
      //console.log("Dist==="+dist);
    }
   // const [value, onChange] = useState(new Date());
   onpickTimeChange=(date)=>{ 
    let picktime=date;
    //picktime=format(date, 'yyyy-MM-dd  H:mm a');
    console.log("toLocaleString******"+date.toLocaleString('en-IN',{ hour12: false }));
    picktime=date.toLocaleString('en-IN',{ hour12: false });
    var dateNew = picktime.toLocaleString('en-US',{hour12:false}).split(" ");
    var time = dateNew[1];
    var mdy = dateNew[0];
    mdy = mdy.split('/');
    var month = parseInt(mdy[1]);
    var day = parseInt(mdy[0]);
    var year = parseInt(mdy[2]);
    var formattedDate = year + '-' + month + '-' + day + ' ' + time;
    console.log("formattedDate=="+formattedDate);
    this.setState({pickupTimeSelected:formattedDate});
    //console.log("picktime=="+picktime);
     this.setState({pickupTime:date});
   }
   onEndTimeChange=(date)=>{     
    this.setState({returnTime:date});
    //let dateNew=Moment(date).format('YYYY-MM-DD HH:MM:SS');
    // console.log("dateNew=="+dateNew);
    let returnTime=date.toLocaleString('en-IN',{ hour12: false });
    var dateNew = returnTime.toLocaleString('en-US',{hour12:false}).split(" ");
    var time = dateNew[1];
    var mdy = dateNew[0];
    mdy = mdy.split('/');
    var month = parseInt(mdy[1]);
    var day = parseInt(mdy[0]);
    var year = parseInt(mdy[2]);
    var formattedDate = year + '-' + month + '-' + day + ' ' + time;
    console.log("formattedDate=="+formattedDate);
    this.setState({returnTimeSelected:formattedDate});
  }
  searchCabs=()=>{
    console.log("this.state.mobileNo=="+this.state.mobileNo);
   // console.log(this.state.pickupPlace+"*****"+this.state.pickupTimeSelected+"**pickupLatlng"+JSON.stringify(this.state.pickupLatlng)+"===destinationLatlng=="+JSON.stringify(this.state.destinationLatlng));
    if(this.state.pickupPlace=="" || this.state.pickupPlace==undefined || this.state.destinationPlace=="" || this.state.destinationPlace==undefined){
      alert("Please enter pickup and destionation");
      return false;
    }
    if(this.state.mobileNo==""  || isNaN(this.state.mobileNo)){
      alert("Invalid mobile no.");
      return false;
    }
    if(this.state.mobileNo.length!=10){
      alert("Invalid mobile no.");
      return false;
    }
    
    if(this.state.pickupTimeSelected=="" || this.state.pickupTimeSelected==undefined){
      alert("Please select pickup date");
      return false;
    }
    let distance=getPreciseDistance(
      { latitude: this.state.pickupLat, longitude: this.state.pickupLng },
      { latitude: this.state.destinationLat, longitude: this.state.destinationLng }
    );
    if(distance<0){
      alert("Invalid locations");
      return false;
    }
    console.log("distance==="+distance);
    
    console.log(this.state.pickupLat+"=pickup==="+this.state.pickupLng);
    console.log(this.state.destinationLat+"=destination==="+this.state.destinationLng);
    console.log("*****"+JSON.stringify(this.state.destinationLatlng));
    let pickupDistObj=JSON.stringify(this.state.pickupLatlng);
    let destinationDistObj=JSON.stringify(this.state.destinationLatlng);
    window.location.href="/Search/"+this.state.pickupPlace+"/"+this.state.destinationPlace+"/"+this.state.pickupTimeSelected+"/"+this.state.returnTimeSelected+"/"+pickupDistObj+"/"+destinationDistObj+"/"+this.state.mobileNo;
  }
  setDestination=(dest)=>{
    this.setState({destination:dest.target.value})
  }
  setMobile=(mobile)=>{
    this.setState({mobileNo:mobile.target.value})
  }
  setPickupData=(dataApi)=>{
    //console.log(JSON.stringify(dataApi));
    let placeId=dataApi.value.place_id;
    let placeLabel=dataApi.label;
    this.setState({pickupPlace:placeLabel});
    //console.log("placeLabel=="+placeLabel);
    geocodeByPlaceId(placeId)
    .then(results => {
      //console.log("resut=="+JSON.stringify(results[0].geometry));
      //console.log("resut=="+JSON.stringify(results[0].geometry.location));
      

      let locationObj=JSON.parse(JSON.stringify(results[0].geometry.location));
      var lat=results[0].geometry.location.lat;
      var lng=results[0].geometry.location.lng;

      this.setState({pickupLat:locationObj.lat});
      this.setState({pickupLng:locationObj.lng});

       this.setState({pickupLatlng:results[0].geometry.location});
    }).catch(error => console.error(error));
  }
  
  setDestination=(dataApi)=>{
    //console.log(JSON.stringify(dataApi));
    let placeId=dataApi.value.place_id;
    //console.log("placeId=="+placeId);
    
    let placeLabel=dataApi.label;
    this.setState({destinationPlace:placeLabel});
    geocodeByPlaceId(placeId)
    .then(results => {
      //console.log("resut=="+JSON.stringify(results[0].geometry));
      //console.log("resut=location="+JSON.stringify(results[0].geometry.location));
      let locationObj=JSON.parse(JSON.stringify(results[0].geometry.location));
      var lat=results[0].geometry.location.lat;
      var lng=results[0].geometry.location.lng;

      this.setState({destinationLat:locationObj.lat});
      this.setState({destinationLng:locationObj.lng});
       
      this.setState({destinationLatlng:locationObj});
    }).catch(error => console.error(error));
  }
    render() { 
        return ( <section id="hero">
          
        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
    
          <div className="carousel-inner" role="listbox">
    
            <div className="carousel-item active" style={{backgroundImage: `url("assets/img/swiftd2.png")`}}>
              <div className="carousel-container">
                <div className="carousel-content animate__animated animate__fadeInUp" style={{padding:10}}>
                <Tabs defaultActiveKey="single" id="uncontrolled-tab-example">
                  <Tab eventKey="single" title="Single">
                    <div className="row" style={{marginTop:10}}>
                        <div className="col-6">
                         
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pickup</Form.Label>
                            <GooglePlacesAutocomplete
                              apiKey="AIzaSyDzlGIoqMbQKaNwu1tCMXCtW3UEjzCfUvs"
                              selectProps={{
                                placeholder: 'Pickup Location',
                                onChange: this.setPickupData,
                                styles: {
                                  input: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  option: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  singleValue: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                },
                              }}
                            />
                          </Form.Group>
                        </div>
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail" >                            
                            <Form.Label>Destination</Form.Label>
                            <GooglePlacesAutocomplete
                              apiKey="AIzaSyDzlGIoqMbQKaNwu1tCMXCtW3UEjzCfUvs"
                              selectProps={{
                                placeholder: 'Destination Location',
                                onChange: this.setDestination,
                                styles: {
                                  input: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  option: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  singleValue: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                },
                              }}
                            />
                          </Form.Group>
                        </div>
                        
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail" >
                            <Form.Label>PickupTime</Form.Label>
                            <DatePicker popperPlacement="auto" showTimeSelect dateFormat="yyyy-MM-dd h:mm aa" className="form-control"
                             selected={this.state.pickupTime}
                             minDate={new Date()}                             
                             onChange={date => this.onpickTimeChange(date)} />
                                                                                   
                          </Form.Group>
                        </div>                        
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type="text" placeholder="Mobile No" onChange={this.setMobile} />
                                                                                   
                          </Form.Group>
                        </div>
                        <div className="col-12" style={{textAlign:'end'}} >
                          <Form.Group controlId="formBasicEmail" >
                            <Button variant="primary" type="button" onClick={this.searchCabs}>
                              Search Cabs
                            </Button>
                          </Form.Group>
                        </div>
                        
                    </div>
                  </Tab>
                  <Tab eventKey="return" title="Return" >
                    <div className="row" style={{marginTop:10}}>
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Pickup</Form.Label>
                            <GooglePlacesAutocomplete
                              apiKey="AIzaSyDzlGIoqMbQKaNwu1tCMXCtW3UEjzCfUvs"
                              selectProps={{
                                placeholder: 'Pickup Location',
                                onChange: this.setPickupData,
                                styles: {
                                  input: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  option: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  singleValue: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                },
                              }}
                            />                           
                          </Form.Group>
                        </div>
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail" >                            
                            <Form.Label>Destination</Form.Label>
                            <GooglePlacesAutocomplete
                              apiKey="AIzaSyDzlGIoqMbQKaNwu1tCMXCtW3UEjzCfUvs"
                              selectProps={{
                                placeholder: 'Destination Location',
                                onChange: this.setDestination,
                                styles: {
                                  input: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  option: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                  singleValue: (provided) => ({
                                    ...provided,
                                    color: 'blue',
                                  }),
                                },
                              }}
                            />
                          </Form.Group>
                        </div>
                        
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail" >
                            <Form.Label>PickupTime</Form.Label>
                            <DatePicker popperPlacement="auto" minDate={new Date()} showTimeSelect dateFormat="yyyy-MM-dd h:mm aa" className="form-control" selected={this.state.pickupTime} onChange={date => this.onpickTimeChange(date)} />                        
                          </Form.Group>
                        </div>
                        
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail" >                           
                            <Form.Label>Return Time</Form.Label>
                            <DatePicker minDate={new Date()}
                              className="form-control"
                              popperPlacement="auto"
                              dateFormat="yyyy-MM-dd h:mm aa"
                              showTimeSelect
                              selected={this.state.returnTime}
                              onChange={date => this.onEndTimeChange(date)}
                            />
                          </Form.Group>
                        </div>
                        <div className="col-6">
                          <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control type="text" placeholder="Mobile No" onChange={this.setMobile} />
                                                                                   
                          </Form.Group>
                        </div>
                        <div className="col-12" style={{textAlign:'end'}}>
                          <Form.Group controlId="formBasicEmail">
                            <Button variant="primary" type="button" onClick={this.searchCabs}>
                              Search Cabs
                            </Button>
                          </Form.Group>
                        </div>
                        
                    </div>
                  </Tab>
                </Tabs>
                </div>
                
              </div>
            </div>
    
          </div>
    
          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
    
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
    
          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
    
        </div>
      </section>
       );
    }
}
 
export default Slider;