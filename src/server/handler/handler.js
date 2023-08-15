const EventEmitter = require('events')

module.exports = 
class Handler extends EventEmitter {
	onEnter = function (socket) {}
	onMessage = function (socket, m) {}
	onExit = function (socket) {}
	constructor (onEnter, onMessage, onExit) {
		super()
		this.onEnter = onEnter
		this.onMessage = onMessage
		this.onExit = onExit
	}
	switch (socket, handler) {
		this.emit('switch', socket, handler)
	}
}
