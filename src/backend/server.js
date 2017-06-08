'use strict'

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const Client = require('node-rest-client').Client

const app = express()
var client = new Client()

const PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, '..', '..', 'lib', 'build')))
app.use(favicon(path.join(__dirname, '..', '..', 'lib', 'build', 'assets', 'favicon.png')))

app.get('/', function (req, res, next) {
	res.sendFile(path.join(__dirname, '..', '..', 'lib', 'build', 'index.html'))
})

app.get('/twitch/streaming', function (req, res) {
	let args = {
		headers: {
			"Content-type": "application/json",
			"Client-ID": process.env.TWITCH_CLIENT_ID
		}
	}
	client.get('https://api.twitch.tv/kraken/streams/thesticktv', args, function (body, response) {
		if (response.statusCode == 200) {
			if (!body) {
				console.log("no body present for: " + res.url)
				res.status(response.statusCode).send()
			}
			res.status(200).send(body)
		} else {
			res.status(response.statusCode).send()
		}
	})
})

app.get('/overwatch', function (req, res, next) {
	res.sendFile(path.join(__dirname, '..', '..', 'lib', 'build', 'index.html'))
})

app.get('/heroes', function (req, res, next) {
	res.sendFile(path.join(__dirname, '..', '..', 'lib', 'build', 'index.html'))
})

app.get('*', function (req, res, next) {
	res.redirect('/')
})

console.log('Server started on port ' + PORT)
app.listen(PORT)