"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Constants = require("./Constants");

var _pie = require("@nivo/pie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NivoPieChart = function NivoPieChart(props) {
  return /*#__PURE__*/_react["default"].createElement(_pie.ResponsivePie, {
    data: props.data,
    margin: {
      top: _Constants.MARGIN.top,
      right: _Constants.MARGIN.right,
      bottom: _Constants.MARGIN.bottom,
      left: _Constants.MARGIN.left
    },
    innerRadius: 0.5,
    padAngle: 0.7,
    colors: {
      scheme: 'nivo'
    },
    borderWidth: 1,
    borderColor: {
      from: 'color',
      modifiers: [['darker', 0.2]]
    },
    radialLabelsSkipAngle: 10,
    radialLabelsTextXOffset: 6,
    radialLabelsTextColor: "#333333",
    radialLabelsLinkOffset: 0,
    radialLabelsLinkDiagonalLength: 16,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkStrokeWidth: 1,
    radialLabelsLinkColor: {
      from: 'color'
    },
    slicesLabelsSkipAngle: 10,
    slicesLabelsTextColor: "#333333",
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    defs: [{
      id: 'dots',
      type: 'patternDots',
      background: 'inherit',
      color: 'rgba(255, 255, 255, 0.3)',
      size: 4,
      padding: 1,
      stagger: true
    }, {
      id: 'lines',
      type: 'patternLines',
      background: 'inherit',
      color: 'rgba(255, 255, 255, 0.3)',
      rotation: -45,
      lineWidth: 6,
      spacing: 10
    }],
    fill: [{
      match: {
        id: 'ruby'
      },
      id: 'dots'
    }, {
      match: {
        id: 'c'
      },
      id: 'dots'
    }, {
      match: {
        id: 'go'
      },
      id: 'dots'
    }, {
      match: {
        id: 'python'
      },
      id: 'dots'
    }, {
      match: {
        id: 'scala'
      },
      id: 'lines'
    }, {
      match: {
        id: 'lisp'
      },
      id: 'lines'
    }, {
      match: {
        id: 'elixir'
      },
      id: 'lines'
    }, {
      match: {
        id: 'javascript'
      },
      id: 'lines'
    }],
    legends: [{
      anchor: 'bottom',
      direction: 'row',
      translateY: 45,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: '#999',
      symbolSize: 18,
      symbolShape: 'circle',
      effects: [{
        on: 'hover',
        style: {
          itemTextColor: '#000'
        }
      }]
    }]
  });
};

var _default = NivoPieChart;
exports["default"] = _default;
//# sourceMappingURL=NivoPieChart.js.map