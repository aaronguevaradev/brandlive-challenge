# THANKS FOR THE CODE CHALLENGE

I had a lot of fun doing the code challenge. Thanks!

I added a few things to the project like prettier and Typescript as well as converted a couple of files to typescript so you can see my skills with that conversion. Also, i configured and setup typescript on the project. 

I added an animated gif file with the page working with the developers tools in the email that I sent to Jessica. If you need anything else or have any questions, please let me konw. 

I also added the Material-UI library to make the page look nice and used the socket.io interface and the other requriements were met.

Thanks again!

Aaron Guevara


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
