const express = require("express")
const cors = require("cors")
const openairouter = require("./route/openai")
const app = express()
app.use(express.json())
app.use(cors());


app.use("/openai", openairouter)
app.get("/", (req, res) => {
    res.send("Welcome To Shayri World")
})

app.listen(8080, () => {
    try {
        console.log("Server Is Connected To port 8080")
    } catch (error) {
        console.log(error)
    }
})