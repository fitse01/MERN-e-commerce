import http from 'http'
import app from './app/app.js'

// create the server 
const PORT = process.env.PORT || 7000;
const   Server = http.createServer(app);
Server.listen(PORT, console.log(`server is up and running ${PORT}`))