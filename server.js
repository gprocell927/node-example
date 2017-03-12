const http = require ('http')

const server = http.createServer()

server.listen(3000, 'localhost')

let counter = 0

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('Hej världen!\n')
  res.write(`This is Request #${++counter}.`)
  res.end()
})
