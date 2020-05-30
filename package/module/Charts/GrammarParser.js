"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NivoLineChart = _interopRequireDefault(require("./NivoLineChart"));

var _NivoBarChart = _interopRequireDefault(require("./NivoBarChart"));

var _NivoScatterChart = _interopRequireDefault(require("./NivoScatterChart"));

var _NivoPieChart = _interopRequireDefault(require("./NivoPieChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GrammarParser = function GrammarParser(jsonData) {
  var getData = function getData(name) {
    var values = null;
    jsonData.data.forEach(function (d) {
      if (d.name == name) {
        values = d.values;
      }
    });
    return values;
  };

  var getNivoPieData = function getNivoPieData(data, group, value, colors) {
    var dataPoints = [];
    data.forEach(function (d, index) {
      dataPoints.push({
        "id": d[group],
        "label": d[group],
        "value": d[value],
        "color": colors[index % colors]
      });
    });
    return dataPoints;
  };

  var getNivoLineData = function getNivoLineData(dataArray, axes) {
    var lineData = [];
    var colors = [];
    axes.y.dataColumns.forEach(function (yAxis) {
      colors.push(yAxis.color);
      var data = [];
      var lData = {
        id: yAxis.name,
        color: yAxis.color,
        data: data
      };
      dataArray.forEach(function (d) {
        if (!isNaN(d[yAxis.name])) {
          lData.data.push({
            x: d[axes.x.dataColumn],
            y: d[yAxis.name]
          });
        }
      });
      lineData.push(lData);
    });
    return {
      data: lineData,
      colors: colors
    };
  };

  var getNivoBarData = function getNivoBarData(dataArray, axes) {
    var barData = [];
    dataArray.forEach(function (d) {
      var dp = {};
      axes.y.dataColumns.forEach(function (yAxis) {
        dp[axes.x.dataColumn] = d[axes.x.dataColumn];
        dp[yAxis.name] = d[yAxis.name];
        dp[yAxis.name + "Color"] = yAxis.color;
      });
      barData.push(dp);
    });
    var keys = [],
        colors = [];
    axes.y.dataColumns.forEach(function (yAxis) {
      keys.push(yAxis.name);
      colors.push(yAxis.color);
    });
    return {
      data: barData,
      keys: keys,
      colors: colors
    };
  };

  var getNivoScatterData = function getNivoScatterData(dataArray) {
    return {
      data: dataArray
    };
  };

  var getVizInfo = function getVizInfo() {
    return {
      "name": jsonData["name"],
      "description": jsonData["description"],
      "header": jsonData["header"]
    };
  };

  var els = [];
  var containerCssStyle = {
    width: "100%",
    height: "100%"
  };
  jsonData.charts.forEach(function (chart, index) {
    var chartType = chart.type;
    var dataName = chart.data;
    var data = getData(dataName);
    var colX = chart.position.x + 1,
        colSpan = chart.position.columns,
        rowSpan = chart.position.rows,
        colXClass = "col-start-" + colX,
        colSpanClass = "col-span-" + colSpan,
        rowSpanClass = "row-span-" + rowSpan;
    var el = null;

    if (chartType == "line") {
      var lineData = getNivoLineData(data, chart.axes);
      el = /*#__PURE__*/_react["default"].createElement("div", {
        key: "line-chart-container-" + index,
        style: containerCssStyle,
        className: colXClass + " " + colSpanClass + " " + rowSpanClass
      }, /*#__PURE__*/_react["default"].createElement(_NivoLineChart["default"], {
        key: "line-chart-" + index,
        chartTitle: chart["title"],
        axes: chart["axes"],
        colors: lineData.colors,
        data: lineData.data
      }));
    } else if (chartType == "bar") {
      var barData = getNivoBarData(data, chart.axes);
      el = /*#__PURE__*/_react["default"].createElement("div", {
        key: "bar-chart-container-" + index,
        style: containerCssStyle,
        className: colXClass + " " + colSpanClass + " " + rowSpanClass
      }, /*#__PURE__*/_react["default"].createElement(_NivoBarChart["default"], {
        key: "bar-chart-" + index,
        chartTitle: chart["title"],
        axes: chart["axes"],
        keys: barData.keys,
        colors: barData.colors,
        data: barData.data
      }));
    } else if (chartType == "horizontal-bar") {
      var _barData = getNivoBarData(data, chart.axes);

      el = /*#__PURE__*/_react["default"].createElement("div", {
        key: "horizontal-bar-chart-container-" + index,
        style: containerCssStyle,
        className: colXClass + " " + colSpanClass + " " + rowSpanClass
      }, /*#__PURE__*/_react["default"].createElement(_NivoBarChart["default"], {
        key: "horizontal-bar-chart-" + index,
        chartTitle: chart["title"],
        horizontal: true,
        axes: chart["axes"],
        keys: _barData.keys,
        colors: _barData.colors,
        data: _barData.data
      }));
    } else if (chartType == "scatter") {
      var scatterData = getNivoScatterData(data);
      el = /*#__PURE__*/_react["default"].createElement("div", {
        key: "scatter-chart-container-" + index,
        style: containerCssStyle,
        className: colXClass + " " + colSpanClass + " " + rowSpanClass
      }, /*#__PURE__*/_react["default"].createElement(_NivoScatterChart["default"], {
        key: "scatter-chart-" + index,
        axes: chart["axes"],
        data: scatterData.data
      }));
    } else if (chartType == "area") {
      var _lineData = getNivoLineData(data, chart.axes);

      el = /*#__PURE__*/_react["default"].createElement("div", {
        key: "line-chart-container-" + index,
        style: containerCssStyle,
        className: colXClass + " " + colSpanClass + " " + rowSpanClass
      }, /*#__PURE__*/_react["default"].createElement(_NivoLineChart["default"], {
        key: "line-chart-" + index,
        chartTitle: chart["title"],
        enableArea: true,
        axes: chart["axes"],
        colors: _lineData.colors,
        data: _lineData.data
      }));
    } else if (chartType == "pie") {
      var pieData = getNivoPieData(data, chart.group, chart.value, chart.colors);
      el = /*#__PURE__*/_react["default"].createElement("div", {
        key: "pie-chart-container-" + index,
        style: containerCssStyle,
        className: colXClass + " " + colSpanClass + " " + rowSpanClass
      }, /*#__PURE__*/_react["default"].createElement(_NivoPieChart["default"], {
        key: "pie-chart-" + index,
        data: pieData
      }));
    }

    els.push(el);
  });

  var gridEl = /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-" + jsonData.columns + " grid-rows-" + jsonData.rows + " gap-4",
    style: containerCssStyle
  }, els);

  return {
    charts: gridEl,
    vizInfo: getVizInfo()
  };
};

var _default = GrammarParser;
exports["default"] = _default;
//# sourceMappingURL=GrammarParser.js.map