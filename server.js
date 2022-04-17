const express = require('express');
const app = express();
const fungi = require('./data.js')

app.set('port', process.env.PORT || 3001);
app.locals.title = 'UFO - Unidentified Fungus Outdoors';
app.locals.fungi = fungi;

app.get('/', (request, response) => {
  response.json(app.locals.fungi);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});