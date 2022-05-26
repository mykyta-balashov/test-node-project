require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5050

const app = express()
app.listen(PORT, () => console.log('Listening on port', PORT))