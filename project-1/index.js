import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.urlencoded({
    extended: false,
}))

app.get("/", (req, res) => {
    res.send("<h2>Hello World</h2>")
})

app.get("/:name", (req, res) => {
    let name = req.params.name;

    res.send(`<h2>Hello ${name}</h2>`)
})

app.listen(3000, () => {
    console.log("Listening at port 3000")
})