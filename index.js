const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/season/:id', (request, response) => {
  const { id } = request.params
  const season = showdata.seasons.find((season) => season.number === parseInt(id))

  return response.render('season', { season, showdata })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(6969, () => {
  console.log('listening on port 6969....')// eslint-disable-line no-console
})

