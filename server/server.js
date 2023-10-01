const express = require('express');
const db_connect = require('./DB/config');
const cors= require('cors');
const { chatRoutes } = require('./routes/chatRoutes');
const errorHandler= require('./middleware/errorHandling');

const app=require('express')();
require('dotenv').config();

// middleware 
app.use(express.urlencoded({extended: true})); // enable to receive data from frontend
app.use(express.json());
app.use(cors());
app.use(chatRoutes);


const server=require('http').createServer(app);
db_connect();


const PORT_NUM = process.env.PORT || 6000;


// error handling middleware
app.use(errorHandler);


server.listen(PORT_NUM,() => {
    console.log(`Server listening on ${PORT_NUM}`);
});



const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
}); //this Socket.io helps to connect client to server
