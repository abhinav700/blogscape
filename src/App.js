 import React from 'react'
 import { useState } from 'react';
import NavBar from './frontend/Navbar/NavBar'
import {
  BrowserRouter as Router,
  
  Route,Switch,
 
  
} from "react-router-dom";
import Login from './frontend/Login/Login';
import Register from './frontend/register/Register';
import About from './frontend/About/About';
import Alert from './frontend/Alert';
import Home from './frontend/Home/Home';
import NewPost from './frontend/NewPost/NewPost';
import BlogState from './Context/Blogs/BlogState';
import ViewPost from './frontend/ViewPost/ViewPost';
 import {useEffect} from "react"
 const App = () => {
 
   
   const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    },message===null?0:1500);
    
  };
  return (
     <>
     <BlogState>
     <Router>
       
      
          <NavBar />
           
          <div>
     <Alert alert={alert}  />
            <Switch>

              <Route exact path="/login">
               <Login showAlert={showAlert}/>
              </Route>
              <Route exact path="/">
               <Login showAlert={showAlert}/>
              </Route>
              
              <Route exact path="/write">
              <NewPost/>
              </Route>

              <Route exact path="/home">
              <Home showAlert={showAlert}/>
              </Route>
              <Route exact path="/about">
               <About showAlert={showAlert}/>
              </Route>
              <Route exact path="/register">
               <Register showAlert={showAlert}/>
              </Route>
              <Route exact path={`/viewPost/:id`}>
               <ViewPost/>
              </Route>
           
            </Switch>
          </div>
        </Router>
  
     </BlogState>
    </>
    
   )
 }
 
 export default App
 