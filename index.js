import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/views'));


app.listen(8080)