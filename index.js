const express = require('express');
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/saugat',(req,res)=>{
    res.send('<h1>bro</h1>')

})

app.listen(process.env.PORT, () => {
  console.log(`Example apps listening on port ${port}`)
})
