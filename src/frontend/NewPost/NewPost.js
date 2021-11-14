import React from 'react'
import "./NewPost.css"
const NewPost = () => {
    return (
        <>
        <div className="container">

            <div className="post-image">

            </div>
            <form action="">
                <h3>Title</h3>
                <input type="text" name="title" />

                <div className="my-5">

                <h3 className="">Content</h3>
                <textarea name="content" id="" cols="150" rows="15"></textarea>
                </div>

                <button type="submit" className="mx-2 btn btn-primary" >Publish</button>           
            </form>
        </div>
        </>
    )
}

export default NewPost
