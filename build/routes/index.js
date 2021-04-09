"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
var express_1 = require("express");
var db_1 = __importDefault(require("../db"));
var path_1 = __importDefault(require("path"));
var router = express_1.Router();
router.get('/graphiql', graphql_playground_middleware_express_1.default({ endpoint: '/graphql' }));
// Resolve shortened url
router.get('/:urlCode', function (req, res, next) {
    var code = req.params.urlCode;
    var url = db_1.default.get(code);
    if (url)
        res.redirect(url);
    else
        next();
}, function (_, res) {
    res.sendFile(path_1.default.join(process.cwd(), 'public/index.html'));
});
router.get('*', function (req, res) {
    res.redirect('/graphiql');
});
exports.default = router;
