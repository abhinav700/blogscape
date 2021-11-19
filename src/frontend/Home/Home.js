import React,{useContext,useEffect} from 'react'
import BlogItem from '../BlogItem/BlogItem'
import "./Home.css"
import banner from "./Blog Banner.jpg"
import SideBar from '../SideBar/SideBar'
import blogContext from '../../Context/Blogs/blogContext'
import {useHistory} from "react-router-dom"

const Home = () => {
    const context = useContext(blogContext);
    const { blogs, getBlogs  } = context;
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token")) {
          getBlogs();
        } else {
          history.push("/login");
        }
        // eslint-disable-next-line
      }, []);
    const updateBlog={
        
    }
    return (
        <div className="HomePage">
        <section className="banner">
       <h1 className="banner">BLOGSCAPE</h1>   
        <div className="banner-image">
            <img src={banner} alt="" className="banner-image" />
        </div>

            <div className="d-flex">



          <div className="d-flex post-area">
          {localStorage.getItem("token") &&
          blogs.map((blog) => {
            return (
                (
                    <BlogItem key={blog._id} blog={blog} updateBlog={updateBlog}  />
                    )
            );
          })}
             
            </div>
            <SideBar/>
            
            </div> 

      
        
    
        

        </section>

        </div>
    )
}

export default Home
