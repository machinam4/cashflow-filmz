"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\n\n  # This \"Moviez\" type defines the queryable fields for every movie in our data source.\n  scalar Upload\n\n  type movie {\n    id: ID!\n    title: String!\n    cover: String\n  }\n  type moviedit {\n    id: String!\n    title: String!\n  }\n\n\n  type season {\n    id: ID!\n    title: String!\n    episodes: String!\n    cover: String\n  }\n\n  type Mutation {\n    addMovie(title: String!, cover: Upload!): movie!\n    addSeason(title: String!, episodes: String!, cover: Upload!): season!\n    updateMovie(id: String!, title: String!): movie!\n    updateSeason(id: String!, title: String!, episodes: String!): season!\n  }\n  \n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n      movies: [movie]\n      seasons: [season]\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServer.gql)(_templateObject());
exports.typeDefs = typeDefs;