const express = require('express');
const app = express();
const cors = require('cors');
const fungi = require('./fungi.js');
const users = require('./users.js');
const sightings = require('./sightings.js');

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'U.F.O. - Unidentified Fungus Outdoors';
app.locals.fungi = fungi;
app.locals.users = users;
app.locals.sightings = sightings;

app.get('/api/v1/users', (request, response) => {
  response.json(app.locals.users);
});

app.get('/api/v1/users/:id', (request, response) => {
  const user = app.locals.users.find(user => user.id.toString() === request.params.id);

  response.json(user);
});

app.get('/api/v1/sightings', (request, response) => {
  response.json(app.locals.sightings);
})

app.get('/api/v1/fungi', (request, response) => {
  response.json(app.locals.fungi);
});

app.get('/api/v1/fungi/:region', (request, response) => {
  const regionalFungi = app.locals.fungi.filter(fungus => fungus.regions.includes(request.params.region));

  response.json(regionalFungi);
});

app.post('/api/v1/sightings', (request, response) => {
  if (request.body.id && request.body.date && request.body.location && request.body.notes && request.body.fungusId && request.body.userId) {
    app.locals.sightings.push(request.body);
    response.send(request.body);
  } else {
    response.status(422).json({ status: 422, message: 'Please fill out all fields.' });
  }
});

app.delete('/api/v1/sightings/:id', (request, response) => {
  const found = app.locals.sightings.find(sighting => sighting.id.toString() === request.params.id);

  if (!found) {
    response.json({ message: `Unable to delete item with id ${request.params.id}.` });
  } else {
    app.locals.sightings = app.locals.sightings.filter(sighting => sighting.id.toString() !== request.params.id);
    response.json({ message: `Deleted item with id ${request.params.id}.` });
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});