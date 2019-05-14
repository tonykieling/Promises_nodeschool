'use strict'

let http = require("q-io/http");
const path1 = "http://localhost:7000"
const path2 = "http://localhost:7001"

http.read(path1)
  .then(k => ({id: (Buffer.from(k)).toString()}))
  .then(id => http.read(`http://localhost:7001/<${id}>`))
  .then(console.log)


/*
## Task

Let's talk to two remote processes over HTTP being run by your friend and mine, "localhost".

  * Port 7000: Faux session cache (Redis or some such thing)
  * Port 7001: Faux database (MongoDB, LevelDB, Postgres, etc)

As in the previous lesson, use the q-io module to create promises as wrappers for HTTP responses.
Hint: You will probably need more than one promise…

  * Send an HTTP GET request to the session cache on port 7000.  A string will be returned to you representing a user ID.
  * Grab that ID from the session response and send an HTTP GET request to your database on port 7001 to the url `localhost:7001/<id>`.
  * If successfully done, your database will return a user object.`console.log` it to win many nerd-points.
    
*/