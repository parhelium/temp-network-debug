const net = require('net')
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))

const socket = new net.Socket()

socket.on('connect', function () {
  console.log('connected')

  socket.write('222')
})

socket.on('data', console.log)

socket.on('close', function () {
  console.log('closed')
})

socket.connect(25000, argv.host || '0.0.0.0')
