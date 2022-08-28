# temp-network-debug

```
git clone git@github.com:LuKks/temp-network-debug.git
cd temp-network-debug
npm install
```

By default, both server and client uses the port 25000.

## Create a server on a machine:
```bash
node server.js

# You can specify an address to listen at:
# node server.js --host 192.168.0.23
```

## Connect from other machine:
```bash
node client.js

# Or if you have the server on a specific address:
# node client.js --host 192.168.0.23
```

## Print interfaces
```bash
node interfaces.js
```

## License
MIT
