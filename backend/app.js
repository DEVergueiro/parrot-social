const express = require('express');
const routes = require('./src/routes');
const db = require('./src/database')

const app = express()

app.use(express.json())

db.hasConection()

app.use(routes)

app.listen(6000, () => console.log('Servidor no ar!'))