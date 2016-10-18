'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rover = require('./controllers/rover')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/*', (req, res) => {
  res.json(rover(req.body))
})

module.exports = app
