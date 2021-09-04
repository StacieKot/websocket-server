"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.initGameSettings = void 0;
var game_1 = require("./types/game");
exports.initGameSettings = {
    masterAsPlayer: true,
    changingCardInRoundEnd: false,
    timer: true,
    scoreType: game_1.ScoreType.storyPoint,
    roundTime: 140,
};
exports.store = {};
