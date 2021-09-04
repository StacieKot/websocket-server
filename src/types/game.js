"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreType = exports.GameStatus = void 0;
var GameStatus;
(function (GameStatus) {
    GameStatus["pending"] = "pending";
    GameStatus["inProgress"] = "inProgress";
    GameStatus["finished"] = "finished";
    GameStatus["canceled"] = "canceled";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
var ScoreType;
(function (ScoreType) {
    ScoreType["storyPoint"] = "storyPoint";
})(ScoreType = exports.ScoreType || (exports.ScoreType = {}));
