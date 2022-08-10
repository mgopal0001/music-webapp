import "./SaveSong.css";
import config from "../config";
import { useState } from "react";
import axios from "axios";

const SaveArtist = (props) => {
  const { show, close } = props;

  const [artist, setArtist] = useState({
    name: "",
    dob: null,
    bio: "",
    image: null,
  });

  const handleSubmit = () => {
    axios.post();
  };

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setArtist((prevState) => {
      const Artist = {
        ...prevState,
      };

      if (event.target.name === "name") {
        Artist.name = event.target.value;
      } else if (event.target.name === "dob") {
        Artist.dob = event.target.value;
      } else if (event.target.name === "image") {
        Artist.image = event.target.value;
      } else if (event.target.name === "bio") {
        Artist.bio = event.target.value;
      }

      return Artist;
    });
  };

  return (
    <div
      className="login-box"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <button className="close-icon fa-close fa" onClick={close}></button>
      <h2>Add Artist</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name="name"
            required=""
            value={artist.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="date"
            name="dob"
            required=""
            value={artist.dob}
            onChange={handleChange}
          />
          <label>Date of Birth</label>
        </div>
        <div className="user-box">
          <textarea
            name="bio"
            required=""
            value={artist.bio}
            onChange={handleChange}
          />
          <label>Bio</label>
        </div>
        <div className="user-box">
          <input
            type="file"
            name="image"
            className="file"
            text="Select Song"
            value={artist.image}
            onChange={handleChange}
          />
          <label for="file">Song cover</label>
        </div>
        <a href="#">
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

export default SaveArtist;
