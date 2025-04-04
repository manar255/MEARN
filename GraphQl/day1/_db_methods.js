import db from "./_db.js";

export const getSongs = () => {
  return Promise.resolve(db.Song);
};

export const getSong = (id) => {
  return Promise.resolve(db.Song.find((s) => s.id === id));
};

export const getArtists = () => {
  return Promise.resolve(db.Artist);
};

export const getArtist = (id) => {
  return Promise.resolve(db.Artist.find((a) => a.id === id));
};

export const getAlbums = () => {
  return Promise.resolve(db.Album);
};

export const getAlbum = (id) => {
  return Promise.resolve(db.Album.find((a) => a.id === id));
};
export const addSong = (songInput) => {
  return new Promise((resolve, reject) => {
    const artist = db.Artist.find((a) => a.id === songInput.artist_id);
    if (!artist) {
      reject(new Error("Artist not found."));
      return;
    }

    const album = db.Album.find((a) => a.id === songInput.album_id);
    if (!album) {
      reject(new Error("Album not found."));
      return;
    }

    const song = {
      ...songInput,
      id: Math.floor(Math.random() * 10000).toString(),
    };
    db.Song.push(song);
    artist.song_ids.push(song.id);
    album.song_ids.push(song.id);

    resolve(song);
  });
};
export const deleteSong = (id) => {
  return new Promise((resolve, reject) => {
    const song = db.Song.find((s) => s.id === id);
    if (!song) {
      reject(new Error("Song not found."));
      return;
    }

    const artist = db.Artist.find((a) => a.id === song.artist_id);
    if (artist) {
      artist.song_ids = artist.song_ids.filter((songId) => songId !== id);
    }

    const album = db.Album.find((a) => a.id === song.album_id);
    if (album) {
      album.song_ids = album.song_ids.filter((songId) => songId !== id);
    }

    db.Song = db.Song.filter((s) => s.id !== id);
    resolve(song);
  });
};
export const updateSong = (id, title) => {
  return new Promise((resolve, reject) => {
    const oldSong = db.Song.find((s) => s.id === id);
    if (!oldSong) {
      reject(new Error("Song not found."));
      return;
    }

    db.Song = db.Song.map((s) => {
      if (s.id === id) {
        return { ...s, title };
      }
      return s;
    });
    resolve(db.Song.find((s) => s.id === id));
    
  });
};
  

// export const addMovie = (movieInput) => {
//   return new Promise((resolve, reject) => {
//     const director = db.directors.find((d) => d.id === movieInput.director_id);
//     if (!director) {
//       reject(new Error("Director not found."));
//       return;
//     }

//     const movie = {
//       ...movieInput,
//       id: Math.floor(Math.random() * 10000).toString(),
//     };
//     db.movies.push(movie);
//     director.movie_ids.push(movie.id);

//     resolve(movie);
//   });
// };

// export const deleteMovie = (id) => {
//   return new Promise((resolve, reject) => {
//     const movie = db.movies.find((m) => m.id === id);
//     if (!movie) {
//       reject(new Error("Movie not found."));
//       return;
//     }

//     const director = db.directors.find((d) => d.id === movie.director_id);
//     if (director) {
//       director.movie_ids = director.movie_ids.filter(
//         (movieId) => movieId !== id
//       );
//     }

//     db.movies = db.movies.filter((m) => m.id !== id);
//     resolve(movie);
//   });
// };

// export const updateMovie = (id, edits) => {
//   return new Promise((resolve, reject) => {
//     const oldMovie = db.movies.find((m) => m.id === id);
//     if (!oldMovie) {
//       reject(new Error("Movie not found."));
//       return;
//     }

//     if (edits.director_id && oldMovie.director_id !== edits.director_id) {
//       const newDirector = db.directors.find((d) => d.id === edits.director_id);
//       if (!newDirector) {
//         reject(new Error("New director not found."));
//         return;
//       }

//       const oldDirector = db.directors.find(
//         (d) => d.id === oldMovie.director_id
//       );
//       if (oldDirector) {
//         oldDirector.movie_ids = oldDirector.movie_ids.filter(
//           (movieId) => movieId !== id
//         );
//       }

//       newDirector.movie_ids.push(id);
//     }

//     db.movies = db.movies.map((m) => {
//       if (m.id === id) {
//         return { ...m, ...edits };
//       }
//       return m;
//     });

//     resolve(db.movies.find((m) => m.id === id));
//   });
// };

// export const getDirectorById = (id) => {
//   return Promise.resolve(db.directors.find((d) => d.id === id));
// };

// export const getReviewsByMovieId = (movieId) => {
//   return Promise.resolve(db.reviews.filter((r) => r.movie_id === movieId));
// };

// export const getMovieById = (id) => {
//   return Promise.resolve(db.movies.find((m) => m.id === id));
// };

// export const getMoviesByDirectorIds = (movieIds) => {
//   return Promise.resolve(db.movies.filter((m) => movieIds.includes(m.id)));
// };

// export const getReviewsByDirectorId = (directorId) => {
//   return Promise.resolve(
//     db.reviews.filter((r) => r.director_id === directorId)
//   );
// };
