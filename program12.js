'use strict'

let http = require("q-io/http");
const path = "http://localhost:1337"

http.read(path)
  .then(JSON.parse)
  .then(console.log)


/*
## Task
Fetch JSON from [http://](http://localhost:1337) and console.log it.

There are several things you will want to know:

  * `q-io`'s `http` module has a `read` method which returns a promise for the content of a successful (status 200) HTTP request.
  * Parse the returned JSON and `console.log` it for much win.

This challenge is a bit tricky but the implementation is relatively straightforward.  If you get stuck, refer to the q-io documentation for clarification:

  [https://](https://localhost:1337)
*/