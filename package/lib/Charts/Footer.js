"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full px-2"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm text-gray-700 float-left"
  }, props.description), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm text-gray-700 float-right"
  }, "Powered by ", /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-blue-500",
    href: "https://github.com/vidalab/vida"
  }, "vida"), " & ", /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-blue-500",
    href: "https://redwoodjs.com/",
    target: "_blank"
  }, "redwoodjs")))));
};

var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=Footer.js.map