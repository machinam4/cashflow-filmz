"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _db = require("./db");

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
var resolvers = {
  Query: {
    movies: function movies() {
      return _db.moviez.find();
    },
    seasons: function seasons() {
      return _db.seasonz.find();
    }
  },
  Mutation: {
    addMovie: function () {
      var _addMovie = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref) {
        var title, cover, _yield$cover, filename, createReadStream, movie;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                title = _ref.title, cover = _ref.cover;
                _context.next = 3;
                return cover;

              case 3:
                _yield$cover = _context.sent;
                filename = _yield$cover.filename;
                createReadStream = _yield$cover.createReadStream;
                _context.next = 8;
                return new Promise(function (res) {
                  createReadStream().pipe((0, _fs.createWriteStream)(_path["default"].join(__dirname, "../../covers", filename))).on("close", res);
                });

              case 8:
                movie = new _db.moviez({
                  title: title,
                  date: new Date(),
                  cover: filename
                });
                _context.next = 11;
                return movie.save();

              case 11:
                return _context.abrupt("return", movie);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addMovie(_x, _x2) {
        return _addMovie.apply(this, arguments);
      }

      return addMovie;
    }(),
    updateMovie: function () {
      var _updateMovie = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref2) {
        var id, title, movie;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id, title = _ref2.title;
                _context2.next = 3;
                return _db.moviez.findByIdAndUpdate(id, {
                  title: title
                }, // If `new` isn't true, `findOneAndUpdate()` will return the
                // document as it was _before_ it was updated.
                {
                  "new": true,
                  useFindAndModify: false
                });

              case 3:
                movie = _context2.sent;
                return _context2.abrupt("return", movie);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateMovie(_x3, _x4) {
        return _updateMovie.apply(this, arguments);
      }

      return updateMovie;
    }(),
    addSeason: function () {
      var _addSeason = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref3) {
        var title, episodes, cover, _yield$cover2, filename, createReadStream, season;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                title = _ref3.title, episodes = _ref3.episodes, cover = _ref3.cover;
                _context3.next = 3;
                return cover;

              case 3:
                _yield$cover2 = _context3.sent;
                filename = _yield$cover2.filename;
                createReadStream = _yield$cover2.createReadStream;
                _context3.next = 8;
                return new Promise(function (res) {
                  createReadStream().pipe((0, _fs.createWriteStream)(_path["default"].join(__dirname, "../../../cashflow.evoton.co.ke/covers", filename))).on("close", res);
                });

              case 8:
                season = new _db.seasonz({
                  title: title,
                  episodes: episodes,
                  date: new Date(),
                  filename: filename
                });
                _context3.next = 11;
                return season.save();

              case 11:
                return _context3.abrupt("return", season);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addSeason(_x5, _x6) {
        return _addSeason.apply(this, arguments);
      }

      return addSeason;
    }(),
    updateSeason: function () {
      var _updateSeason = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, _ref4) {
        var id, title, episodes, season;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref4.id, title = _ref4.title, episodes = _ref4.episodes;
                _context4.next = 3;
                return _db.seasonz.findByIdAndUpdate(id, {
                  title: title,
                  episodes: episodes
                }, // If `new` isn't true, `findOneAndUpdate()` will return the
                // document as it was _before_ it was updated.
                {
                  "new": true,
                  useFindAndModify: false
                });

              case 3:
                season = _context4.sent;
                return _context4.abrupt("return", season);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateSeason(_x7, _x8) {
        return _updateSeason.apply(this, arguments);
      }

      return updateSeason;
    }()
  }
};
exports.resolvers = resolvers;