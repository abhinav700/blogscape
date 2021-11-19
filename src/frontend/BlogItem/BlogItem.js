import React,{useContext} from "react";
import "./BlogItem.css"
 import blogContext from "../../Context/Blogs/blogContext";
import path from "../Home/Blog Banner.jpg"
 
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import ViewPost from "../ViewPost/ViewPost";
const BlogItem = (props) => {
  let history=useHistory()
  const {blog}=props;
  const context=useContext(blogContext)
  const {getPost,updateBlog,deleteBlog}=context;
  const handleOnClick=()=>{
   
    <ViewPost id={blog._id}/>
     
  }
  return (
    
      <div  className="fragment" style={{width: "fit-content",height:"fit-content"}}>

      <div className="card mx-3 my-4" style={{width: "28rem",height:"36rem"}}>
        <img src={path} className="card-img-top" alt="..." />
        <div className="d-flex">

        <i className="mx-3 my-2  fas fa-edit text-dark"  onClick={updateBlog}></i>
        <i className="mx-3 my-2 fas fa-trash-alt text-dark" onClick={()=>deleteBlog(blog._id)}  ></i>
        </div>
            
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">
           {blog.content.length>150? blog.content.slice(0,150)+"...":blog.content }
          </p>
   

          <Link to={`/viewPost/${blog._id}`} onClick={handleOnClick} style={{position:"relative",bottom:"0"}}   className="card-link">
            View Full Post
          </Link>
          
           
        </div>
      </div>
    </div>
       
  );
};

export default BlogItem;
