import { useState } from "react";
import "./SaveSong.css";

const SaveSong = (props) => {
  const { show, close } = props;
  const [song, setSong] = useState({
    name: "",
    dor: null,
    audio: null,
    image: null,
    artist: [],
  });

  const handleSubmit = () => {};

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setSong((prevState) => {
      const Song = {
        ...prevState,
      };

      if (event.target.name === "name") {
        Song.name = event.target.value;
      } else if (event.target.name === "dor") {
        Song.dor = event.target.value;
      } else if (event.target.name === "image") {
        Song.image = event.target.value;
      } else if (event.target.name === "song") {
        Song.audio = event.target.value;
      } else if (event.target.name === "artist") {
        Song.artist = event.target.value;
      }

      return Song;
    });
  };

  return (
    <div
      className="login-box"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <button className="close-icon fa-close fa" onClick={close}></button>
      <h2>Add Song</h2>

      <form>
        <div className="user-box">
          <input
            type="text"
            name="name"
            required=""
            value={song.name}
            onChange={handleChange}
          />
          <label>Song Name</label>
        </div>
        <div className="user-box">
          <input
            type="date"
            name="dor"
            required=""
            value={song.dor}
            onChange={handleChange}
          />
          <label>Date of Release</label>
        </div>
        <div className="user-box">
          <input
            type="file"
            name="song"
            required=""
            className="file"
            id="file"
            value={song.audio}
            onChange={handleChange}
          />
          <label for="file">Song</label>
        </div>
        <div className="user-box">
          <input
            type="file"
            name="image"
            className="file"
            text="Select Song"
            value={song.image}
            onChange={handleChange}
          />
          <label for="file">Song cover</label>
        </div>
        <div className="user-box">
          <select name="artist">
            <option value="">Select Artist</option>
            <option value="Arijit singh">Arijit Singh</option>
            <option value="Arijit singh">Shreya Ghoshal</option>
            <option value="Arijit singh">Kailash Kher</option>
            <option value="Arijit singh">Diljit Doshanjh</option>
          </select>
        </div>

        <a href="#" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default SaveSong;
