const express = require('express');
const redis = require('redis');

const app = express();
/* here Redis tries to reach out to the host name 'redis-server', this will not cause any errors, because docker-compose creates a network between two containers (or two services) and resolves hosts
between the two */
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
