"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var port = process.env.PORT || 5000;
var baseUrl = process.env.BASE_URL || "http://localhost:" + port;
var Query = {
    shortenUrl: function (_, _a) {
        var url = _a.url;
        return baseUrl + "/" + lib_1.shortenUrl(url);
    },
};
exports.default = {
    Query: Query,
};
