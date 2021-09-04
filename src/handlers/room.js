"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveRoomHandler = exports.joinRoomHandler = exports.createRoomHandler = void 0;
var room_1 = require("../actions/room");
var user_1 = require("../actions/user");
var events_1 = require("../events");
var store_1 = require("../store");
var user_2 = require("../types/user");
var createRoomHandler = function (socket) {
    return function (_a) {
        var roomId = _a.roomId, user = _a.user;
        (0, room_1.createRoom)(store_1.store, roomId);
        (0, user_1.addUser)(store_1.store, roomId, socket.id, __assign(__assign({}, user), { role: user_2.UserRole.master }));
        socket.join(roomId);
        socket.emit(events_1.ROOM_WAS_CREATED, socket.id, store_1.store[roomId]);
    };
};
exports.createRoomHandler = createRoomHandler;
var joinRoomHandler = function (socket) {
    return function (_a) {
        var roomId = _a.roomId, user = _a.user;
        if (store_1.store[roomId]) {
            var joinedUser = (0, user_1.addUser)(store_1.store, roomId, socket.id, user);
            socket.join(roomId);
            socket.emit(events_1.JOINED_ROOM, socket.id, store_1.store[roomId]);
            socket.to(roomId).emit(events_1.USER_CONNECTED, socket.id, joinedUser);
        }
        else {
            socket.emit(events_1.ROOM_NOT_FOUND, socket.id);
            socket.disconnect();
        }
    };
};
exports.joinRoomHandler = joinRoomHandler;
var leaveRoomHandler = function (socket) {
    return function (roomId) {
        (0, user_1.changeUserStatus)(store_1.store, roomId, socket.id, user_2.UserStatus.left);
        socket.emit(events_1.LEFT_ROOM, socket.id);
        socket.to(roomId).emit(events_1.USER_LEFT, socket.id);
    };
};
exports.leaveRoomHandler = leaveRoomHandler;
