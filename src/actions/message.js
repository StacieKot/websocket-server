"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMessage = void 0;
var addMessage = function (store, roomId, userId, text) {
    var message = { userId: userId, text: text };
    store[roomId].messages = __spreadArray(__spreadArray([], store[roomId].messages, true), [message], false);
    return message;
};
exports.addMessage = addMessage;
