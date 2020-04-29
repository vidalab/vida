export const schema = gql`
  type VizJson {
    name: String!
    vizName: String!
  }

  type Query {
    getViz(name: String!): VizJson!
  }
`