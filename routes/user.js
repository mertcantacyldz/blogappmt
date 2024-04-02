const express = require("express");
const router = express.Router();

const db = require("../data/database")



router.use("/blogs/category/:categoryid", async function(req, res) {
    const id = req.params.categoryid;
    try {
        const [blog, ] = await db.execute("select * from blog where category_id=?", [id]); 
        const [categories, ] = await db.execute("select * from category");

        res.render("users/blogs", {
            mainTitle: "Tüm Kurslar",
            categories: categories,
            blogs: blog,
            selectedCategory: id
         
        })
    }
    catch(err) {
        console.log(err);
    }
});

router.use("/blogs/:blogid", async (req, res) => {
    const id = req.params.blogid
     try{

        const [blogs,] = await db.execute("select * from blog where approved=1 and blogid = ? ", [id])
        const blog =blogs[0]

        //console.log(blog,"onay")

        if(blog){
            return  res.render("users/blog-details.ejs", {
                blogs: blog
    
            });
        }
        res.redirect("/")
     }
     catch (err){
 console.log(err)
     }

});

router.use("/blogs", async (req, res) => {
    try {
        const blog = await db.execute("select * from blog where approved=1 and homepage=1")
        const categories = await db.execute("select * from category")
   
        res.render("users/blogs.ejs", {
            mainTitle: "Popüler Kurslar",
            categories: categories[0],
            blogs: blog[0],
            selectedCategory: null


        });
    }
    catch (err) {
        console.log(err)
    }





});

router.use("/", async (req, res) => {

    try {
        const [blog,] = await db.execute("select * from blog where  homepage=1")
        const [categories,]  =  await db.execute("select * from category")


        res.render("users/blogs.ejs", {
            mainTitle: "Popüler Kurslar",
            categories: categories,
            blogs: blog,
            selectedCategory: null


        });

    }
    catch (err) {
        console.log(err)

    }

});

module.exports = router;