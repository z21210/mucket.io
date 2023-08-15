Handler  = require('./handler')
module.exports = new Handler(
	onEnter = function (socket) {
		socket
			.send('Welcome to Mucket.io!')
			.send('Please register with \`register\`, or log in with \`login [name] [password]\`.')
			.send(' ')
	},
	onMessage = function (socket, m) {
		switch (m) {
			case 'register':
				this.switch(socket, 'REGISTER')
				break
		}
	},
	onExit = function (socket) {
		
	}
)
