const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const apiRouter = require('./routes')

// body parsing
server.use(bodyParser.json()) // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({ extended: true }))

server.use(express.static(path.join(__dirname, '../public')))
server.use('/api', apiRouter)

// Catch All: Show 404 at not supported pages
server.get('*', function (req, res) {
  res
    .status(404)
    .send(
      `<h1>Error 404</h1><p>Page is not available on</p><p>${
        req.originalUrl
      }</p>`
    )
})

module.exports = server