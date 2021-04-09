"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var apollo_server_express_1 = require("apollo-server-express");
var validURL = 'https://google.com';
var invalidURL = 'https://googledotcom';
test('URL is valid', function () {
    expect(index_1.shortenUrl(validURL)).toMatch(/^[a-z]{6}$/);
});
test('URL is not valid', function () {
    expect(function () { return index_1.shortenUrl(invalidURL); }).toThrowError(apollo_server_express_1.UserInputError);
});
