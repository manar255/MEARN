import {
getSongs,
getSong,getAlbums,
getAlbum,
getArtists,
getArtist,
addSong,
deleteSong,
updateSong,
} from "./_db_methods.js";

export const resolvers = {
  //entry point
  Query: {
    songs: function () {
      return getSongs();
    },
    song: function (_, args) {
      return getSong(args.id);
    },
    artists: function () {
      return getArtists();
    },
    artist: function (_, args) {
      return getArtist(args.id);
    },
    albums: function () {
      return getAlbums();
    },
    album: function (_, args) {
      return getAlbum(args.id);
    },
  },

  Mutation: {
    addSong: function (_, args) {
      console.log(args);
      return addSong(args.songInput);
    },
    deleteSong: function (_, args) {
      return deleteSong(args.id);
    },
    updateSong: function (_, args) {
      console.log(args);
      return updateSong(args.id, args.title);
    },
  },
  // Type relations (field resolvers) -----------------------------------------

  Song:{
    artist: function (parent) {
      return getArtist(parent.artist_id);
    },
    album:function(parent){
      return getAlbum(parent.album_id);
    }
  },
  Artist: {
    songs: function (parent) {
      let songIds = parent.song_ids;
      return songIds.map((id) => getSong(id));
    },
  },
  Album: {
    artist: function (parent) {
      return getArtist(parent.artist_id);
    },
    songs: function (parent) {
      let songIds = parent.song_ids;
      return songIds.map((id) => getSong(id));
    },
  },
};