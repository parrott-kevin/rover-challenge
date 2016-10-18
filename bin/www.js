'use strict'

const app = require('../app')

app.set('port', 8080)
const server = app.listen(app.get('port'), () => {
  console.log('Server started on http://localhost:' + server.address().port)
})
