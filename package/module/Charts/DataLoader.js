"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("./Header"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _GrammarParser = _interopRequireDefault(require("./GrammarParser"));

var _Constants = require("./Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataLoader = /*#__PURE__*/function (_Component) {
  _inherits(DataLoader, _Component);

  var _super = _createSuper(DataLoader);

  function DataLoader(props) {
    var _this;

    _classCallCheck(this, DataLoader);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "vizName", void 0);

    _defineProperty(_assertThisInitialized(_this), "vizData", void 0);

    _defineProperty(_assertThisInitialized(_this), "getDataUrl", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _iterator, _step, d, response, json;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(_this.vizData["data"]);
              _context.prev = 1;

              _iterator.s();

            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 15;
                break;
              }

              d = _step.value;

              if (!d["url"]) {
                _context.next = 13;
                break;
              }

              _context.next = 8;
              return fetch(d["url"]);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              json = _context.sent;
              d["values"] = json;

            case 13:
              _context.next = 3;
              break;

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);

              _iterator.e(_context.t0);

            case 20:
              _context.prev = 20;

              _iterator.f();

              return _context.finish(20);

            case 23:
              _this.setState({
                data: _this.vizData
              });

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 17, 20, 23]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      if (_this.vizName) {
        var url = '';

        if (_this.vizName.indexOf('https://') == 0) {
          url = _this.vizName;
        } else {
          url = '/viz/' + _this.vizName;
        }

        window.fetch(url).then(function (res) {
          return res.json();
        }).then( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(json) {
            var _iterator2, _step2, d, response, _json;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _iterator2 = _createForOfIteratorHelper(json["data"]);
                    _context2.prev = 1;

                    _iterator2.s();

                  case 3:
                    if ((_step2 = _iterator2.n()).done) {
                      _context2.next = 15;
                      break;
                    }

                    d = _step2.value;

                    if (!d["url"]) {
                      _context2.next = 13;
                      break;
                    }

                    _context2.next = 8;
                    return fetch(d["url"]);

                  case 8:
                    response = _context2.sent;
                    _context2.next = 11;
                    return response.json();

                  case 11:
                    _json = _context2.sent;
                    d["values"] = _json;

                  case 13:
                    _context2.next = 3;
                    break;

                  case 15:
                    _context2.next = 20;
                    break;

                  case 17:
                    _context2.prev = 17;
                    _context2.t0 = _context2["catch"](1);

                    _iterator2.e(_context2.t0);

                  case 20:
                    _context2.prev = 20;

                    _iterator2.f();

                    return _context2.finish(20);

                  case 23:
                    _this.setState({
                      data: json
                    });

                  case 24:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[1, 17, 20, 23]]);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      } else {
        _this.getDataUrl();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (JSON.stringify(_this.props) != JSON.stringify(prevProps)) {
        _this.vizData = _this.props.vizData;

        _this.getDataUrl();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      if (_this.state.data) {
        var vizData = _this.state.data;
        var grammarParser = (0, _GrammarParser["default"])(vizData);
        var charts = grammarParser.charts;
        var vizInfo = grammarParser.vizInfo;
        var headerPadding = "80";

        if (!vizInfo["header"]) {
          headerPadding = "30";
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            height: "100%",
            width: "100%"
          }
        }, vizInfo["header"] && /*#__PURE__*/_react["default"].createElement(_Header["default"], {
          name: vizInfo["header"]["text"],
          backgroundColor: vizInfo["header"]["backgroundColor"],
          align: vizInfo["header"]["align"]
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: _Constants.containerClassName,
          style: {
            height: "calc(100% - " + headerPadding + "px)"
          }
        }, charts), /*#__PURE__*/_react["default"].createElement(_Footer["default"], {
          description: vizInfo["description"]
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _Constants.containerClassName + " text-center"
        }, "Loading...");
      }
    });

    _this.vizName = props.vizName; // serialize vizData so it won't change props

    if (props.vizData) {
      _this.vizData = JSON.parse(JSON.stringify(props.vizData));
    }

    _this.state = {
      data: null
    };
    return _this;
  }

  return DataLoader;
}(_react.Component);

var _default = DataLoader;
exports["default"] = _default;
//# sourceMappingURL=DataLoader.js.map