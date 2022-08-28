const net = require('net')
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))

const server = net.createServer(function (socket) {
  console.log('new client')

  socket.on('data', console.log)

  socket.on('close', function () {
    console.log('client closed')
  })

  socket.write('111')
})

server.listen(25000, argv.host || '0.0.0.0', function () {
  console.log('listening', server.address())
})
