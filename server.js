const express = require('express');
const app = express();
const fungi = require('./data.js');

app.use(express.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'U.F.O. - Unidentified Fungus Outdoors';
app.locals.fungi = fungi;

app.get('/api/v1/fungi', (request, response) => {
  response.json(app.locals.fungi);
});

app.get('/api/v1/fungi/:region', (request, response) => {
  const regionalFungi = app.locals.fungi.filter(fungus => fungus.regions.includes(request.params.region));

  response.json(regionalFungi);
});

app.post('/api/v1/sightings', (request, response) => {
  if (request.body.id && request.body.date && request.body.location && request.body.notes) {
    response.json(request.body);
  } else {
    response.sendStatus(422);
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});