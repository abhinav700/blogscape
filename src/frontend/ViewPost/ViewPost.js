import React,{useContext} from 'react'
import blogContext from '../../Context/Blogs/blogContext'
import {useState,useEffect } from 'react';
import {useLocation} from "react-router"
const host = "http://localhost:5000";

//Function to get all Blogs

const ViewPost = (props) => {
    let location=useLocation();
    let path=location.pathname.split('/')[2]
    console.log(path)
      const [post, setPost] = useState({})
      useEffect(() => {
          const getPost = async (id) => {
            //backend
            const response = await fetch(`${host}/api/blogs/getPost/${id}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')      
            },
            });
            const json = await response.json();
            console.log(json)
            setPost(json);
          };
     getPost(props.id)
     
 }, [])
  return (
        <> 
         <div style={{color:"black"}} className=" ">
             <h1>post</h1>
             
        <h1>{post.title?post.title:"title is loading"}</h1>     
        
        <div >{post.content?post.content:"content is loading"}</div>
        </div>   
        </>
    )
}

export default ViewPost
