const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '..', '..', 'lib', 'build')))
app.use(favicon(path.join(__dirname, '..', '..', 'lib', 'build', 'assets', 'favicon.png')))

app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, '..', '..', 'lib', 'build', 'index.html'));
});

console.log('Server started on port ' + PORT)
app.listen(PORT)