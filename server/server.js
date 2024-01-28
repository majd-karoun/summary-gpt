const express = require("express");
const app = express();
const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');




const PORT = process.env.PORT || 3000; 

const API_KEY = process.env.API_KEY;

app.use(cors({ origin: 'https://summary-gpt.netlify.app' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/summarize", async (req, res) => {
    const { bookTitle } = req.body;
    const { language } = req.body;
    
    let prompt = `(${language}) Summarize the book "${bookTitle}" in ${language}. Provide detailed explanations of the main ideas from each section. If there's an error before completion, start with "SummaryError:", otherwise remove "SummaryError:".`

    if(bookTitle.includes(11)){
      prompt = `respond in ${language}. give another title for the book: ${bookTitle}`
    }

    if(bookTitle.includes(5946)){
      prompt = `((respond in ${language}) summarize the book: "${bookTitle}" in ${language} and in details and explain the main ideas behind each section of the book.each section summary should be at least 80 words (only if you faced an error before you finish start your response with "SummaryError:" and if there was no error then delete "SummaryError:")`
    }
    
    
    
    
    
   
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",

stream: true

        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt
              , 
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


 
