//
require('dotenv').config();

/**
 * API's
 */

const http = require('http');
const app = require('./server/express/express.js');
const SocketIO = require('./server/socket/socket.io.js');

/**
 * Setup
 */

const port = process.env.port || 5000;
const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on ${port}`));
SocketIO.listen(server, {});

/**
 * Test Bots
 */
