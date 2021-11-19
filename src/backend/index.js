const connectToMongo=require('./db');
const express=require('express')
var cors = require('cors')

connectToMongo();
const app = express()
app.use(cors())
const port = 5000

app.use(express.json())
app.use('/api/blogs',require('./routes/blogs.js'))

app.use('/api/auth',require('./routes/auth.js'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})