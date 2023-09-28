const express= require('express');
const chatRoutes= express.Router();
const {getChat}= require('../controller/chatController');
chatRoutes.route('/api/chat').get(getChat)

module.exports = {chatRoutes};