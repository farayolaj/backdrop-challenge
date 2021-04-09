"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var apollo_server_express_1 = require("apollo-server-express");
var resolvers_1 = __importDefault(require("./resolvers"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Set up apollo server
var typeDefs = apollo_server_express_1.gql(fs_1.default.readFileSync('src/schema.graphql').toString());
var graphqlServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers_1.default,
});
graphqlServer.applyMiddleware({ app: app });
// Express routes
app.use(routes_1.default);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Server started on port: 5000');
});
