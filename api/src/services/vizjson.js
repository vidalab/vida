import vizJson from '../viz/viz.json'

export const getViz = ({ name }) =>  {
  console.log(process.env.VIZ_JSON)
  if (process.env.VIZ_JSON) {
    const vJson = require('../viz/' + process.env.VIZ_JSON)
    return {
      name: name,
      data: JSON.stringify(vJson)
    }
  } else {
    return {
      name: name,
      data: JSON.stringify(vizJson)
    }
  }
}