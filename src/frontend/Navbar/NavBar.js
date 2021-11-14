import React from 'react'
import {
 useHistory,
  Link,useLocation
  
} from "react-router-dom";
import ProfilePic from './ProfilePic';
const NavBar = () => {
  let location=useLocation()
   let history=useHistory()
  const handleLogout=(e)=>{
    localStorage.removeItem("token");
    history.push("login ")
      
  }
    return (
        <>
         <nav  style={{position:"sticky",top:"0",zIndex:"2"}} className="navbar navbar-expand-lg navbar-dark   bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">BlogScape</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
         {!localStorage.getItem("token")&&(<Link className="nav-link active" aria-current="page" to="/login">Login</Link>)}
        </li>
       
         
       
      </ul>
      <form className="d-flex">

      {localStorage.getItem("token")&&location!=="/"&&location!=="/login"?(
        <>
      <Link to="/write"><i style={{color:"white",fontSize:"1.4rem",margin:"auto auto"}} className="mx-3 my-2 fas fa-pencil-alt"></i></Link>
      <ProfilePic/>
     <Link to="/login"><button type="button" className="mx-2 btn btn-primary" onClick={handleLogout} >Logout</button></Link>
        </>)
      :
      (<Link to="/register"><button  type="button" className="mx-2 btn btn-primary" >Register</button></Link>)
      }
     
      </form>
    </div>
  </div>
</nav>   
        </>
    )
}

export default NavBar
