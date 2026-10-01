import express from "express"

const app = express()


app.get("/", (req, res) => {
    //res.send("Hello from express");
    //res.send("<h1>Hello from express</h1>");
res.send(`
<h1>Hello from express</h1>
<h2> This is my first express app</h2>
<h3> This is my first express app</h3>

    `


);

})


app.listen(3000, () => {
    console.log("server is running on the port of 3000")
})
 