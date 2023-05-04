const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 3000; 

const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/summarize", async (req, res) => {
    const { bookTitle } = req.body;
    const { language } = req.body;
    console.log(req.body)
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `respond in ${language}. summarize the book: ${bookTitle} in details and explain the main ideas behind each section of the book. If the summary was not possible start responding with SummaryError: `, 
            },
          ],
        }),
      });
  
      const data = await response.json();
  
     
        res.json(data.choices[0].message.content);
     
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while processing your request" });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


 