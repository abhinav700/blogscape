import React from 'react'
import "./NewPost.css"
import blogContext from '../../Context/Blogs/blogContext';
import { useContext } from "react";
 import {useHistory} from "react-router-dom"
import { useState } from "react";


 
const NewPost = () => {
  let history=useHistory()
    const context = useContext(blogContext);
  const {addBlog} = context;
   
    const [blog, setBlog] = useState({ title: "", content: "", category: "" });
    const handleSubmit = (e) => {
      e.preventDefault();
      addBlog(blog.title, blog.content, blog.category);
      setBlog({ title: "", content: "", category: "" })
      history.push("/home")
    };
    const onChange = (e) => {
      setBlog({ ...blog, [e.target.name]: e.target.value });  
    };
    return (
        <>
        <div className="container">
          <div className="div">

            <div className="post-image">

            </div>
          </div>
            <label htmlFor="fileInput">

            <i class="fas fa-upload"></i> 
            </label>
            <input id="file" style={{visibility:"invisible"}} className=" " type="file"   />

            <form action="" onSubmit={handleSubmit} autoComplete="off">
                <h3>Title</h3>
                <input className="input-field" onChange={onChange} type="text" name="title" />

                <div className="my-5">

                <h3 className="">Content</h3>
                <textarea onChange={onChange} name="content" id="" cols="150" rows="15"></textarea>
                </div>


                <h3>Category</h3>
                <input className="input-field" onChange={onChange}  type="text" name="category" />
                <button type="submit" className="my-5 btn btn-primary" >Publish</button>           
            </form>
        </div>
        </>
    )
}

export default NewPost
