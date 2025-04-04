import { gql } from "@apollo/client";

// Queries
export const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
      genres
      artist {
        id
        name
      }
      album {
        id
        title
      }
    }
  }
`;



// Mutations
export const ADD_SONG = gql`
  mutation AddSong($song: AddSongInput!) {
    addSong(songInput: $song) {
      id
      title
      genres
}
      }
`;


export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export const UPDATE_SONG = gql`
  mutation updateSong($id: ID!, $title: String) {
    updateSong(id: $id, title: $title) {
      id
      title
    }
  }
`;
