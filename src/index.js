"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var events_1 = require("./events");
var message_1 = require("./handlers/message");
var room_1 = require("./handlers/room");
var server = (0, http_1.createServer)();
var io = new socket_io_1.Server(server, {
    path: "/",
    cors: {
        origin: "http://localhost:8080",
    },
});
io.on("connection", function (socket) {
    console.log("Connected " + socket.id);
    socket.on(events_1.CREATE_ROOM, (0, room_1.createRoomHandler)(socket));
    socket.on(events_1.JOIN_ROOM, (0, room_1.joinRoomHandler)(socket));
    socket.on(events_1.SEND_MESSAGE, (0, message_1.sendMessageHandler)(socket));
    socket.on(events_1.LEAVE_ROOM, (0, room_1.leaveRoomHandler)(socket));
});
server.listen(4000, function () {
    console.log("Server is listen on PORT 4000");
});
