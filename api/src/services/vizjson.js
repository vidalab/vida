export const getViz = ({ name }) =>  {
  let vizName = process.env.VIZ_JSON ? process.env.VIZ_JSON : "viz.json"
  return {
    name: name,
    vizName: vizName
  }
}