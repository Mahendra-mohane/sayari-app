const express = require("express")
const openairouter = express.Router();
require("dotenv").config()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
API_KEY = process.env.API_KEY


openairouter.post("/get", async (req, res) => {
    const { message } = req.body
    const { Val } = req.query
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `create hindi ${Val} on ${message}  write in Hinglish` }],
            max_tokens: 1000,
        })
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)

        const data = await response.json()

        let result = data.choices[0].message

        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(400).send({ "msg": error.message })
    }
})

module.exports = openairouter