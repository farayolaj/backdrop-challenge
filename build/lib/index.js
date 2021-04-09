"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenUrl = void 0;
var apollo_server_errors_1 = require("apollo-server-errors");
var isURL_1 = __importDefault(require("validator/lib/isURL"));
var db_1 = __importDefault(require("../db"));
var shortenUrl = function (url) {
    if (!isURL_1.default(url))
        throw new apollo_server_errors_1.UserInputError('Invalid URL sent');
    var code = generateCode();
    db_1.default.set(code, url);
    return code;
};
exports.shortenUrl = shortenUrl;
var generateCode = function () {
    var code = [];
    for (var i = 0; i < 6; i++)
        code.push(97 + Math.floor(Math.random() * 26));
    return String.fromCodePoint.apply(String, code);
};
