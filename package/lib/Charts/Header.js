"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(props) {
  var cssStyle = {
    backgroundColor: props.backgroundColor,
    textAlign: props.align
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "bg-teal-500 p-3",
    style: cssStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-white"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: "font-semibold text-xl tracking-tight"
  }, props.name)))));
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map