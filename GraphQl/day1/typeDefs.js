import { gql } from "graphql-tag";

export const typeDefs = gql`
  # types (entities)
  type Song {
    id: ID!
    title: String!
    artist_id: ID!
    album_id: ID!
    genres: [String!]!

    #### Relationships ####
    artist: Artist!
    album: Album!
  }

  type Artist {
    id: ID!
    name: String!
    country: String!
    song_ids: [ID!]!

    #### Relationships ####
    songs: [Song!]
  }

  type Album {
    id: ID!
    title: String!
    release_year: Int!
    artist_id: ID!
    song_ids: [ID!]!

    #### Relationships ####
    artist: Artist!
    songs: [Song!]
  }

  # queries => entry point for the graphql server
  type Query {
    songs: [Song]
    song(id: ID!): Song
    artists: [Artist]
    artist(id: ID!): Artist
    albums: [Album]
    album(id: ID!): Album
  }
`;
