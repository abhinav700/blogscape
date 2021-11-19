 
import BlogContext from "./blogContext";
import { useState } from "react";
const BlogState = (props) => {

  const host = "http://localhost:5000";
  const initialBlogs = [];
  const [blogs, setBlogs] = useState(initialBlogs);
  const [post, setPost] = useState({})


  //Function to get all Blogs
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
    
    setPost(json);
  };
  
  const getBlogs = async () => {
    //backend
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
      localStorage.getItem('token')      
    },
    });
    const json = await response.json();
    
    setBlogs(json);
  };
  

  
  
  // FUnciton to add a Blog
  const addBlog = async (title, content, category) => {
    //backend
    const response = await fetch(`${host}/api/blogs/addblog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token")
 ,
      },

      body: JSON.stringify({ title, content, category }),
    });
    const json = await response.json();
    // await response.send(json);
    console.log(json)
    console.log("adding a new Blog");
    const Blog=json
    setBlogs(blogs.concat(Blog));
  };

  
  
  //Function to delete a blog
  const deleteBlog = async (id) => {
    console.log("deleting blog");
 
    const response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token")
 ,
        },
    });
    const json =   response.json();
    console.log(json)
    const newBlogs = blogs.filter((blog) => {
      return blog._id !== id;
    });
    setBlogs(newBlogs);
 
  };

  
  
  //Function to edit a Blog
  const editBlog = async (id, title, content, category) => {
    // Handling the backend part
    const response = await fetch(
      `${host}/api/blogs/updateblog/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem("token")
 ,
        },
        body: JSON.stringify({ title, content, category }),
      },
      );
      console.log(response)
   // const json =await response.json();
      let newBlogs=JSON.parse(JSON.stringify(blogs));

    // handling on the client side
    for (let index = 0; index < newBlogs.length; index++) {
      const element =   newBlogs[index];
      if (element._id === id) {
       newBlogs[index].title = title;
       newBlogs[index].content = content;
       newBlogs[index].category = category;
       break;
      }
    }
    setBlogs(newBlogs)
  };




  return (
    <BlogContext.Provider
      value={{post,getPost, setBlogs, blogs, addBlog, deleteBlog, editBlog, getBlogs }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
