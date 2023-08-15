var socket = io();

const output = document.getElementById('output')
const form   = document.getElementById('form')
const input  = document.getElementById('input')
const submit = document.getElementById('submit')

inputs = []
inputPointer = 0
lines = []
LINES_MAX = 200
INPUTS_MAX = 200

writeLine = function (text) {
	if (text)
	line = document.createElement('span')
	line.append(document.createTextNode(text))
	lines.unshift(line)
	if (lines.length > LINES_MAX)
		lines.pop().remove() // pop removes element reference from array; remove removes element from DOM
	output.prepend(line)
	
	output.scrollTop = output.scrollHeight
}

form.addEventListener('submit', (event) => {
	event.preventDefault()
	writeLine(`> ${input.value}`)
	socket.send(input.value)
	if (inputPointer > 0) {
		inputs.shift()
	}
	inputs.unshift(input.value)
	inputPointer = 0
	if (inputs.length > INPUTS_MAX)
		inputs.pop()
	input.value = ''
})

socket.on('message', (m) => {
	writeLine(m)
})

input.addEventListener('keyup', (event) => {
	if (event.key == 'ArrowUp' && inputPointer < inputs.length +(inputPointer == 0) -1) {
		event.preventDefault()
		if (inputPointer == 0) {
			inputs.unshift(input.value)
		}
		inputPointer += 1
		input.value = inputs[inputPointer]
	} else if (event.key == 'ArrowDown' && inputPointer > 0) {
		event.preventDefault()
		inputPointer -= 1
		input.value = inputs[inputPointer]
		if (inputPointer == 0) {
			inputs.shift()
		}
	}
})
