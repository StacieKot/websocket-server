"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["nonAuthorized"] = "nonAuthorized";
    UserStatus["active"] = "active";
    UserStatus["kicked"] = "kicked";
    UserStatus["deleted"] = "deleted";
    UserStatus["disconnected"] = "disconnected";
    UserStatus["left"] = "left";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["master"] = "master";
    UserRole["player"] = "player";
    UserRole["observer"] = "observer";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
