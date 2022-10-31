import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import Home from "./home";
import Dashboard from "./dashboard";

export default class App extends Component {
    constructor() {
        super();

       this.state = {
        loggedInStatus: "NOT_LOGGED_IN",
           user: {}
       }
       this.handleLogin = this.handleLogin.bind(this); 
       this.handleLogout = this.handleLogout.bind(this); 
       }

       checkLoginStatus() {
        axios.get("http://localhost:3001/logged_in", {
            withCredentials: true
        }).then(response => 
            {
                if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
                    this.setState({
                        loggedInStatus: "LOGGED_IN",
                        user:response.data.user
                    })
                }
                else if(!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN"){
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN",
                        user: {}
                    })
                } 
                // else{

                // }

            }
            
            )
        .catch(error => {console.log("check login error",error);
    })
       }

       componentDidMount() {
        this.checkLoginStatus();
       }

       handleLogout(){
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        })
       }

       handleLogin(data){
        this.setState({
        loggedInStatus: "LOGGED_IN",
        user: data.user
       });
    }
    render() {
        return (
           
            <div className="app">
            <BrowserRouter>
            <Routes>
             <Route  path={"/home"} 
               element={ 
                <Home handleLogin={this.handleLogin} handleLogout={this.handleLogout}  loggedInStatus= {this.state.loggedInStatus} /> } />   
             <Route  path={"/dashboard"} 
             element={ <Dashboard loggedInStatus= {this.state.loggedInStatus} />} />
             </Routes>
             </BrowserRouter>
             </div>
        );
    }
}