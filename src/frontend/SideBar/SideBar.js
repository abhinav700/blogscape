import React,{useContext} from 'react'
import "./Sidebar.css"
import blogContext from '../../Context/Blogs/blogContext'
const SideBar = () => {
    const context=useContext(blogContext);
    let {blogs}=context;
    let blogsArray=Array.of(blogs)
      let categoryArray=[]
      for(let index = 0; index < blogsArray.length; index++) {
          
          if(categoryArray.includes(blogsArray[index].category)===false)
          {categoryArray.concat(blogsArray[index].category);}
      }
    return (
        <>
       
         
        
            <div className="sidebar container">
                <div className="about-me">
                   <hr />
                    <h4 className="about-me">About Me</h4>
                  <hr />  
                </div>
                <div className="profile-pic">
                     
                </div>
                <div className="about-text my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi similique temporibus quae laudantium voluptatibus necessitatibus sit placeat accusamus ex iure maiores quas labore, eum, quos pariatur quo ullam hic ad. Id, soluta? Odit natus magni sapiente corporis a perspiciatis harum, repudiandae accusantium assumenda id!
                </div>
                <div className="category">
            
                {localStorage.getItem("token") &&
        categoryArray.map((blog) => {
            return (
                (
                     <div className="mx-2 my-3 category-item">
                         {blog}
                     </div>
                    )
            );
          })}
                </div>
            </div>
        </>
    )
}

export default SideBar
