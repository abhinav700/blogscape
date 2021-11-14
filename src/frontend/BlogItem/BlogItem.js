import React from "react";
import path from "../Home/Blog Banner.jpg"
const BlogItem = () => {
  return (
    <>
      <div className="card mx-2 my-4" style={{width: "18rem"}}>
        <img src={path} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/post" className="card-link">
            Card link
          </a>
          <a href="/post" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
