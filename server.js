const express = require('express')
const next = require('next')
const route = require('./lib/nextRoutes')
const { NODE_ENV } = process.env

const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = route.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))

  server.all('/health', (_, res) => res.sendStatus(200))

  server.get('*', (req, res) => handle(req, res))

  server.use(handle).listen(3000, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:3000`)
  })
})
