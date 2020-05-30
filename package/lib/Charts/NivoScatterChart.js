"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Constants = require("./Constants");

var _scatterplot = require("@nivo/scatterplot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NivoScatterChart = function NivoScatterChart(props) {
  var xLabel = props.axes && props.axes.x.label,
      yLabel = props.axes && props.axes.y.label;
  return /*#__PURE__*/_react["default"].createElement(_scatterplot.ResponsiveScatterPlot, {
    data: props.data,
    margin: {
      top: _Constants.MARGIN.top,
      right: _Constants.MARGIN.right,
      bottom: _Constants.MARGIN.bottom,
      left: _Constants.MARGIN.left
    },
    xScale: {
      type: 'linear',
      min: 0,
      max: 'auto'
    },
    xFormat: function xFormat(e) {
      return e;
    },
    yScale: {
      type: 'linear',
      min: 0,
      max: 'auto'
    },
    yFormat: function yFormat(e) {
      return e;
    },
    blendMode: "multiply",
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: xLabel,
      legendPosition: 'middle',
      legendOffset: 46
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: yLabel,
      legendPosition: 'middle',
      legendOffset: -50
    },
    legends: [{
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 130,
      translateY: 0,
      itemWidth: 100,
      itemHeight: 12,
      itemsSpacing: 5,
      itemDirection: 'left-to-right',
      symbolSize: 12,
      symbolShape: 'circle',
      effects: [{
        on: 'hover',
        style: {
          itemOpacity: 1
        }
      }]
    }]
  });
};

var _default = NivoScatterChart;
exports["default"] = _default;
//# sourceMappingURL=NivoScatterChart.js.map