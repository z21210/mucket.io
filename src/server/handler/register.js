Handler  = require('./handler')
module.exports = new Handler(
	onEnter = function (socket) {
		socket
			.send('Welcome to character registration')
	},
	onMessage = function (socket, m) {

	},
	onExit = function (socket) {
		
	}
)