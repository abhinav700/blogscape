import React from 'react'
import "./Sidebar.css"

const SideBar = () => {
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
                    <div className="mx-3 my-3">
                        <h5 className="category-item">music</h5>
                    </div>
                    <div className="mx-3 my-3">
                        <h5 className="category-item">tech</h5>
                    </div>
                    <div className="mx-3 my-3">
                        <h5 className="category-item">dance</h5>
                    </div>
                    <div className="mx-3 my-3">
                        <h5 className="category-item">LifeStyle</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
