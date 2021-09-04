"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kickUserHandler = void 0;
var user_1 = require("../actions/user");
var events_1 = require("../events");
var store_1 = require("../store");
var user_2 = require("../types/user");
var kickUserHandler = function (socket) {
    return function (_a) {
        var userId = _a.userId, roomId = _a.roomId;
        (0, user_1.changeUserStatus)(store_1.store, roomId, userId, user_2.UserStatus.kicked);
        socket.emit(events_1.KICKED_FROM_ROOM, userId);
        socket.to(roomId).emit(events_1.USER_KICKED, userId);
    };
};
exports.kickUserHandler = kickUserHandler;
