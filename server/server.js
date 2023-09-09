const express = require('express');
const db_connect = require('./DB/config');

const app=require('express')();
require('dotenv').config();

const server=require('http').createServer(app);
db_connect();
const PORT_NUM = process.env.PORT || 6000;
app.use(express.json());
server.listen(PORT_NUM,() => {
    console.log(`Server listening on ${PORT_NUM}`);
});
