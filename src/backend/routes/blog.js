const { body, validationResult } = require("express-validator");

const express = require("express");
const router = express.Router();
const fetchuser = require("../middleWare/fetchUser");
const Blog = require("../models/Blog");
// Route to get all the blogs using GET request
router.get("/fetchallblogs", fetchuser, async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });
    res.json(blogs);
  } catch (error) {
    res.status(500).send("Internal server occured");
  }
});

//Adding a new  blog using  /addblog

router.post(
  "/addblog",
  fetchuser,
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body(
      "description",
      "description should have atleast 5 characters"
    ).isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const blog = new Blog({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedblog = await blog.save();
      res.json(savedblog);
    } catch (error) {}
  }
);

//ROute3update an existing blog
router.put(
  "/updateblog/:id",
  fetchuser,

  async (req, res) => {
    const { title, description, tag } = req.body;

    const newblog = {};
    if (title) {
      newblog.title = title;
    }
    if (description) {
      newblog.description = description;
    }
    if (tag) {
      newblog.tag = tag;
    }

    //fINd the blog to be updated and update it

    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).send("not found");
    }

    if (blog.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: newblog },
      { new: true }
    );
    res.json({ blog });
  }
);

// Find the blog to be deleted and delete it
router.delete(
  "/deleteblog/:id",
  fetchuser,

  async (req, res) => {
    const { title, description, tag } = req.body;

    //fINd the blog to be deleted and delete it
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).send("not found");
    }

    //ALlow deletion only if user owns this blog   
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    blog = await Blog.findByIdAndDelete(req.params.id);
    res.json({"Sucess":"blog has been deleted",blog:blog
     });
  }
);
module.exports = router;
