import { gql } from "apollo-server"

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Moviez" type defines the queryable fields for every movie in our data source.
  scalar Upload

  type movie {
    id: ID!
    title: String!
    cover: String
  }
  type moviedit {
    id: String!
    title: String!
  }


  type season {
    id: ID!
    title: String!
    episodes: String!
    cover: String
  }

  type Mutation {
    addMovie(title: String!, cover: Upload!): movie!
    addSeason(title: String!, episodes: String!, cover: Upload!): season!
    updateMovie(id: String!, title: String!): movie!
    updateSeason(id: String!, title: String!, episodes: String!): season!
  }
  

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
      movies: [movie]
      seasons: [season]
  }
`;
