"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DisplayFormatter = /*#__PURE__*/function () {
  function DisplayFormatter() {
    _classCallCheck(this, DisplayFormatter);
  }

  _createClass(DisplayFormatter, null, [{
    key: "formatKMB",
    value: function formatKMB(value) {
      if (value < 1000) {
        return value + "";
      } else if (value >= Math.pow(10, 3) && value < Math.pow(10, 6)) {
        return value / Math.pow(10, 3) + "k";
      } else if (value >= Math.pow(10, 6) && value < Math.pow(10, 9)) {
        return value / Math.pow(10, 6) + "m";
      } else if (value >= Math.pow(10, 9)) {
        return value / Math.pow(10, 9) + "b";
      }
    }
  }]);

  return DisplayFormatter;
}();

var _default = DisplayFormatter;
exports["default"] = _default;
//# sourceMappingURL=DisplayFormatter.js.map