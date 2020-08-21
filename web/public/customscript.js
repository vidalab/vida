CustomScript = {
  calculateRegression: (json) => {
    // we'll format time into UNIX timestamp
    let tf = d3.timeFormat("%s")
    // this is the input time format
    let tp = d3.timeParse("%Y%m%d")
    let x = json.map(d => +tf(tp(d.date)))
    let y = json.map(d => d.positiveIncrease)

    let regression = new ML.SimpleLinearRegression(x, y)
    let predictY = json.map(d => regression.predict(+tf(tp(d.date))))
    json.map((d, i) => {
      d.predictPositiveIncrease = predictY[i]
    })
    return json
  }
}
