import React, { Component } from 'react';
//import Slider from './Slider';

class Header extends Component {
    state = { uid:'',userId:'', firstName:'',lastName:'',mobileNo:'',email:'',userType:''}
    componentDidMount(){
       let userId=localStorage.getItem("userId");
        if(userId>0){
            let firstName =localStorage.getItem("firstName");
            let lastName=localStorage.getItem("lastName");
            let mobileNo=localStorage.getItem("mobileNo");
            let email=localStorage.getItem("email");
            let userType=localStorage.getItem("userType");
            let token=localStorage.getItem("token");

            this.setState({userId:userId});
            this.setState({firstName:firstName});
            this.setState({lastName:lastName});
            this.setState({mobileNo:mobileNo});
            this.setState({email:email});
            this.setState({userType:userType});
       }
        

    }
    signOut=()=>{
        console.log("here===sign out");
        localStorage.setItem("userId",'');
        localStorage.setItem("firstName",'');
        localStorage.setItem("lastName",'');
        localStorage.setItem("mobileNo",'');
        localStorage.setItem("email",'');
        localStorage.setItem("userType",'');
        localStorage.setItem("token",'');
        this.setState({userId:''});
        this.setState({firstName:''});
        this.setState({lastName:''});
        this.setState({mobileNo:''});
        this.setState({email:''});
        this.setState({userType:''});
    }
    getMenus(){
        if(this.state.userType=='admin'){
            return <ul>
                <li className="nav-item"><a href="/Home">Home</a></li>
                <li className="nav-item"><a href="/History">History</a></li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Report
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/Booking">Bookings</a>
                    <a className="dropdown-item" href="/SearchLog">Search Log</a>
                    </div>
                </li>                                      
                <li><a href="#"onClick={this.signOut.bind(this)}><span>Sign Out</span></a></li>
            </ul>
        }else if(this.state.userType=='user'){
            return <ul>
                <li className="nav-item"><a href="/Home">Home</a></li>
                <li className="nav-item"><a href="/History">History</a></li>
                                                 
                <li><a href="#"onClick={this.signOut.bind(this)}><span>Sign Out</span></a></li>
            </ul>
        }else if(this.state.userType=='admin'){
            
        }else if(this.state.userType=='driver'){            
        }else if(this.state.userType=='operator'){
            return (<ul>
                <li className="active"><a href="/Home">Home</a></li>
                <li className="active"><a href="/History">History</a></li>  
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Report
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">My Assign</a>
                    </div>
                </li>                               
                <li><a href="#" onClick={this.signOut}><span>Sign Out</span></a></li>
            </ul>);
        }else{
            return (<ul>
                <li className="active"><a href="/Home">Home</a></li>                                
                <li><a href="/Login"><span>Sign In</span></a></li>
            </ul> );
        }
    }
    render() { 
        
        return (
                <div className="container d-flex align-items-center" style={{backgroundColor:'white'}}>
                   
                    <h1 className="logo mr-auto">
                        <a href="/Home">
                            <img src="/assets/img/logo/prayag.png" style={{width:60}}></img>
                        </a>
                    </h1>
                    <nav className="nav-menu d-none d-lg-block">
                        {
                            this.getMenus()
                        }
                       
                    </nav>
                </div>
        );
    }
}
 
export default Header;