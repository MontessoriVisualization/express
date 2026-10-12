import express from 'express';
import dotenv from 'dotenv';
dotenv.config();//this will load the environment variables from the .env file into process.env
const app = express()

app.get('/', (req, res) => {
  const a ="saugat"
    res.send(a)
})
app.get('/saugat',(req,res)=>{
    res.send('<h1>bro</h1>')

})

// list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const joke=[
    {"id": 1, "joke": "Why don't scientists trust atoms? Because they make up everything."},
    {"id": 2, "joke": "What do you call a fake noodle? An impasta."},
    {"id": 3, "joke": "Why did the scarecrow win an award? Because he was outstanding in his field."},
    {"id": 4, "joke": "How does a penguin build its house? Igloos it together."},
    {"id": 5, "joke": "What do you call a bear with no teeth? A gummy bear."}
  ]
  res.send(joke)
});

app.listen(process.env.PORT, () => {
  console.log(`Example apps listening on port ${process.env.PORT}`)
})

