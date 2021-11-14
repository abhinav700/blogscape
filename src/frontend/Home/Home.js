import React from 'react'
import BlogItem from '../BlogItem/BlogItem'
import "./Home.css"
import banner from "./Blog Banner.jpg"
import SideBar from '../SideBar/SideBar'
const Home = () => {
    
    return (
        <div className="HomePage">
        <section className="banner">
       <h1 className="banner">BLOGSCAPE</h1>   
        <div className="banner-image">
            <img src={banner} alt="" className="banner-image" />
        </div>

            <div className="d-flex">



          <div className="d-flex post-area">
            <div className="">
                <BlogItem/>
            </div>
            <div className="">
                <BlogItem/>
            </div>
            <div className="">
                <BlogItem/>
            </div>
            <div className="">
                <BlogItem/>
            </div>
            <div className="">
                <BlogItem/>
            </div>
            <div className="">
                <BlogItem/>
            </div>
            <div className="">
                <BlogItem/>
            </div>
            </div>
            <SideBar/>
            
            </div> 

      
        
    
        

        </section>

        </div>
    )
}

export default Home
