"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("./Charts/Header"));

var _Footer = _interopRequireDefault(require("./Charts/Footer"));

var _GrammarParser = _interopRequireDefault(require("./Charts/GrammarParser"));

var _Constants = require("./Charts/Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VidaComponent = function VidaComponent(props) {
  var grammarParser = (0, _GrammarParser["default"])(props.vizData);
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
};

var _default = VidaComponent;
exports["default"] = _default;
//# sourceMappingURL=index.js.map