"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Constants = require("./Constants");

var _line = require("@nivo/line");

var _DisplayFormatter = _interopRequireDefault(require("./DisplayFormatter"));

var _d3TimeFormat = require("d3-time-format");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NivoLineChart = function NivoLineChart(props) {
  var xScaleOpts = {
    type: props.axes && props.axes.x.dataType ? props.axes.x.dataType : "point",
    format: props.axes && props.axes.x.dataFormat,
    precision: props.axes && props.axes.x.timePrecision
  };
  var axisBottomOpts = {
    format: props.axes && props.axes.x.displayFormat,
    legend: props.axes && props.axes.x.label,
    legendOffset: 36,
    legendPosition: 'middle'
  };
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
  }, /*#__PURE__*/_react["default"].createElement(_line.ResponsiveLine, {
    data: props.data,
    enableArea: props.enableArea,
    margin: {
      top: _Constants.MARGIN.top,
      right: _Constants.MARGIN.right,
      bottom: _Constants.MARGIN.bottom,
      left: _Constants.MARGIN.left
    },
    xScale: xScaleOpts,
    yScale: {
      type: 'linear',
      min: props.enableArea ? 0 : 'auto',
      max: 'auto',
      stacked: false,
      reverse: false
    },
    axisTop: null,
    axisRight: null,
    axisBottom: axisBottomOpts,
    xFormat: function xFormat(d) {
      if (props.axes.x.dataType == "time") {
        return (0, _d3TimeFormat.timeFormat)(props.axes && props.axes.x.displayFormat)(d);
      } else {
        return d.toString();
      }
    },
    axisLeft: {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: props.axes && props.axes.y.label,
      legendOffset: -45,
      legendPosition: 'middle',
      format: function format(e) {
        return _DisplayFormatter["default"].formatKMB(e);
      }
    },
    colors: props.colors,
    pointColor: {
      theme: 'background'
    },
    pointLabel: "y",
    pointLabelYOffset: -12,
    useMesh: true,
    legends: [{
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [{
        on: 'hover',
        style: {
          itemBackground: 'rgba(0, 0, 0, .03)',
          itemOpacity: 1
        }
      }]
    }]
  })));
};

var _default = NivoLineChart;
exports["default"] = _default;
//# sourceMappingURL=NivoLineChart.js.map