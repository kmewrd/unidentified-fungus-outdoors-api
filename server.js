const express = require('express');
const app = express();
const fungi = require('./data.js')

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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});