CustomScript = {
  calculateRegression: (json, fields) => {
    // we'll format time into UNIX timestamp
    let tf = d3.timeFormat("%s")
    // this is the input time format
    let tp = d3.timeParse("%Y%m%d")
    let x = json.map(d => +tf(tp(d[fields.x])))
    let y = json.map(d => d[fields.y])

    let regression = new ML.SimpleLinearRegression(x, y)
    let predictY = json.map(d => regression.predict(+tf(tp(d[fields.x]))))
    json.map((d, i) => {
      d[fields.predict] = predictY[i]
    })
    return json
  }
}
