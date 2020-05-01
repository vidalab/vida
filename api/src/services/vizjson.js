export const getViz = ({ name }) =>  {
  let vizName = process.env.VIZ_JSON ? process.env.VIZ_JSON : ""
  return {
    name: name,
    vizName: vizName
  }
}