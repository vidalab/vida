export const schema = gql`
  type VizJson {
    name: String!
    data: String!
  }

  type Query {
    getViz(name: String!): VizJson!
  }
`