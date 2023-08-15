const express = require('express')
const path = require('path')

module.exports = 
function (app) {
	app.use(express.static(path.resolve(__dirname, '../client/')))
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client/html/terminal.html'))
	})
}
