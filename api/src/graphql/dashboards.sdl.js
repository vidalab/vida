export const schema = gql`
  type User {
    id: Int!
    email: String!
    auth0Id: String!
  }

  type Dashboard {
    id: String!
    name: String!
    json: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
    ownerEmail: String!
  }

  type Query {
    dashboards(ownerId: String!): [Dashboard!]!
    dashboard(id: String!): Dashboard!
  }

  input CreateDashboardInput {
    name: String!
    json: String!
  }

  input UpdateDashboardInput {
    name: String
    json: String
    updatedAt: DateTime
  }

  type Mutation {
    createDashboard(input: CreateDashboardInput!): Dashboard!
    updateDashboard(id: String!, input: UpdateDashboardInput!): Dashboard!
    deleteDashboard(id: String!): Dashboard!
  }
`
