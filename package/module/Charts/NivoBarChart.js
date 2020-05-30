"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Constants = require("./Constants");

var _bar = require("@nivo/bar");

var _DisplayFormatter = _interopRequireDefault(require("./DisplayFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NivoBarChart = function NivoBarChart(props) {
  var responsiveHeight = props.chartTitle ? "calc(100% - 20px)" : "100%";
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center text-gray-700 font-medium"
  }, props.chartTitle), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: responsiveHeight
    }
  }, /*#__PURE__*/_react["default"].createElement(_bar.ResponsiveBar, {
    data: props.data,
    keys: props.keys,
    enableLabel: false,
    layout: props.horizontal ? 'horizontal' : 'vertical',
    indexBy: props.axes && props.axes.x.dataColumn,
    margin: {
      top: _Constants.MARGIN.top,
      right: _Constants.MARGIN.right,
      bottom: _Constants.MARGIN.bottom,
      left: _Constants.MARGIN.left
    },
    padding: 0.3,
    colors: props.colors,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: props.axes && (props.horizontal ? props.axes.y.label : props.axes.x.label),
      legendPosition: 'middle',
      legendOffset: 32,
      format: function format(e) {
        return !props.horizontal ? e : _DisplayFormatter["default"].formatKMB(e);
      }
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: props.axes && (props.horizontal ? props.axes.x.label : props.axes.y.label),
      legendPosition: 'middle',
      legendOffset: -45,
      format: function format(e) {
        return props.horizontal ? e : _DisplayFormatter["default"].formatKMB(e);
      }
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    legends: [{
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [{
        on: 'hover',
        style: {
          itemOpacity: 1
        }
      }]
    }],
    animate: true,
    motionStiffness: 90,
    motionDamping: 15
  })));
};

var _default = NivoBarChart;
exports["default"] = _default;
//# sourceMappingURL=NivoBarChart.js.map