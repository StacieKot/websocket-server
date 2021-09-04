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
exports.changeUserStatus = exports.addUser = void 0;
var user_1 = require("../types/user");
var addUser = function (store, roomId, userId, user) {
    var joinedUser = __assign(__assign({}, user), { status: user_1.UserStatus.active });
    store[roomId].users[userId] = joinedUser;
    return joinedUser;
};
exports.addUser = addUser;
var changeUserStatus = function (store, roomId, userId, status) {
    store[roomId].users[userId].status = status;
};
exports.changeUserStatus = changeUserStatus;
