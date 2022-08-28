const os = require('os')
const ifaces = os.networkInterfaces()

for (const name in ifaces) {
  const iface = ifaces[name]
  console.log(name, iface)
}
