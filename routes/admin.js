const express = require("express");
const router = express.Router();

const path = require("path");

router.use("/admin/blog/create", (req, res)=> {
    res.render( "/admin/blog/create");
});

router.use("/admin/blogs/:blogid", (req, res)=> {

    res.render( "/admin/blog-edir");
});

router.use("/admin/blogs", (req, res)=> {
   
    res.render( "/admin/blog-list");
});


module.exports = router;