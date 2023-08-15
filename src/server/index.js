const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')
const app = express()
const socketio = require('socket.io')

const PORT_HTTP  = 8080
const PORT_HTTPS = 8443
const key = fs.readFileSync(__dirname+'/ssl/key.pem')
const cert = fs.readFileSync(__dirname+'/ssl/cert.pem')
const httpsServer = https.createServer({key: key, cert: cert}, app)
const httpRedirect = http.createServer((req, res) => {
	res.writeHead(308, {location: 'https://'+req.headers.host+req.url})
	res.end()
})


require('./app')(app)
const io = new socketio.Server(httpsServer)
require('./io')(io)

httpsServer.listen(PORT_HTTPS)
httpRedirect.listen(PORT_HTTP)