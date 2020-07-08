"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seasonz = exports.moviez = void 0;

var _apolloServer = require("apollo-server");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var moviez = _mongoose["default"].model("movie", {
  title: String,
  episodes: String,
  date: String,
  cover: String
});

exports.moviez = moviez;

var seasonz = _mongoose["default"].model("season", {
  title: String,
  episodes: String,
  date: String,
  cover: String
});

exports.seasonz = seasonz;