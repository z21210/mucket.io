Handlers = Object.freeze({
	LANDING: require('./handler/landing'),
	REGISTER: require('./handler/register'),
	PLAY: require('./handler/play')
})

handlers = new Map()

switch_handler = (socket, handler_name) => {
	if (!handler_name in Handlers) return
	handlers.get(socket.id).onExit(socket)
	handlers.set(socket.id, Handlers[handler_name])
	handlers.get(socket.id).onEnter(socket)
}
for (handler in Handlers) {
	console.log(Handlers[handler])
	Handlers[handler].on('switch', switch_handler)
}

module.exports = 
function (io) {
	io.on('connection', (socket) => {
		console.log(`${socket.id} connected`)
		handlers.set(socket.id, Handlers.LANDING)
		handlers.get(socket.id).onEnter(socket)

		socket.on('message', (m) => {
			console.log(`${socket.id}: ${m}`)
			handlers.get(socket.id).onMessage(socket, m)
		})

		socket.on('disconnecting', (reason) => {
			console.log(`${socket.id} disconnecting`)
		})
	})
}