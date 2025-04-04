import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_SONG, DELETE_SONG, UPDATE_SONG, GET_SONGS } from "./queries";

const App = () => {
  const { loading, error, data, refetch } = useQuery(GET_SONGS);
  const [addSong] = useMutation(ADD_SONG);
  const [deleteSong] = useMutation(DELETE_SONG);
  const [updateSong] = useMutation(UPDATE_SONG);

  const [newSong, setNewSong] = useState({ title: "", genres: [] });
  const [editSong, setEditSong] = useState({ id: "", title: "" });

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p>Error loading songs!</p>;

  const handleDeleteSong = async (id) => {
    await deleteSong({ variables: { id } });
    refetch();
  };

  const handleAddSong = async () => {
    // if (!newMovie.title.trim()) return;
// console.log(newSong);
    await addSong({
      variables: {
        song: {
          title: newSong.title,
          genres: newSong.genres.filter((genre) => genre.trim() !== ""),
          artist_id: "1",
          album_id: "1",
        },
      },
    });

    // setNewMovie({ title: "", genres: [] });
    refetch();
  };

  const handleUpdateMovie = async () => {
    if (!editSong.id || !editSong.title.trim()) return;

    await updateSong({
      variables: {
        id: editSong.id,
        title: editSong.title,
      },
    });

    setEditSong({ id: "", title: "" });
    refetch();
  };

  return (
    <div>
      <h2>Songs List</h2>
      <ul>
        {data.songs.map((s) => (
          <li key={s.id}>
            {s.title} - {s.genres.join(", ")}
            <button onClick={() => handleDeleteSong(s.id)}>Delete</button>
            <button
              onClick={() => setEditSong({ id: s.id, title: s.title })}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      <h3>Add a Song</h3>
      <input
        type="text"
        placeholder="Title"
        value={newSong.title}
        onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Genres (comma-separated)"
        value={newSong.genres.join(", ")}
        onChange={(e) =>
          setNewSong({
            ...newSong,
            genres: e.target.value.split(",").map((g) => g.trim()),
          })
        }
      />
      <button onClick={handleAddSong}>Add Song</button>

      <h3>Update a Song</h3>
      <select
        value={editSong.id}
        onChange={(e) => setEditSong({ ...editSong, id: e.target.value })}
      >
        <option value="">Select a song</option>
        {data.songs.map((s) => (
          <option key={s.id} value={s.id}>
            {s.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="New Title"
        value={editSong.title}
        onChange={(e) => setEditSong({ ...editSong, title: e.target.value })}
      />
      <button onClick={handleUpdateMovie}>Update Movie</button>
    </div>
  );
};

export default App;
