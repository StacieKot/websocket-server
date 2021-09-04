"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoom = void 0;
var store_1 = require("../store");
var game_1 = require("../types/game");
var createRoom = function (store, roomId) {
    store[roomId] = {
        users: {},
        messages: [],
        issues: [],
        gameStatus: game_1.GameStatus.pending,
        gameSettings: store_1.initGameSettings,
    };
};
exports.createRoom = createRoom;
