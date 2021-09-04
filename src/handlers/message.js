"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageHandler = void 0;
var message_1 = require("../actions/message");
var events_1 = require("../events");
var store_1 = require("../store");
var sendMessageHandler = function (socket) {
    return function (_a) {
        var roomId = _a.roomId, text = _a.text;
        var message = (0, message_1.addMessage)(store_1.store, roomId, socket.id, text);
        socket.emit(events_1.MESSAGE_WAS_SENDED, socket.id, message);
        socket.to(roomId).emit(events_1.RECEIVE_MESSAGE, message);
    };
};
exports.sendMessageHandler = sendMessageHandler;
