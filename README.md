# Brandlive Code Challenge

## Description

Create a React project that is a chat room.

Leverage Redux or Context API, and use our `codechallenge.brand.live ` socket.io server, and scss to make it pretty.

## Get Started

Write the codes under the sections with comment `// TODO: Your code here...`

## Requirements

1. User lands on page and enters name
2. Name is stored in local storage
3. User can enter chat messages and see chat messages from other people using app
4. Store chat history in local storage so that if user refreses, messages will reappear.
5. Local storage can expire after 1 hour.

## Socket.io Example

```javascript
// version socket-io.client@2.2.0
const socket = require('socket.io-client' ); 

const connection = socket.connect('wss://codechallenge.brand.live' );

const channel = 'code-test';

connection.on('connect', () => {
    connection.emit('join-channel', channel);
    connection.emit('message', { 
        someMessage: 'This is a test.' 
    }, channel); 
});

connection.on('error', (e) => { 
    console.error(e);
});

connection.on('message', (message) => { 
    console.log('MESSAGE RECEIVED', message);
});
```