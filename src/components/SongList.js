import SongCard from "./SongCard";
import config from "../config";
import axios from "axios";
import { useEffect, useState } from "react";

const SongList = (props) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`${config.host}/song`).then((data) => {
      const response = data.data;
      console.log("Songs: ", response.data.songs);
      setSongs(response.data.songs.map(song => {
        return {
          id: song.sid,
          songName: song.songTitle,
          rating: song.totalRating,
          image: song.image,
          audio: song.audio,
          dor: song.dors,
          artists: song.artists
        }
      }));
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <ul className="list-group">
        {
          songs.map(song => {
            console.log(song);
            return (
              <li className="list-group-item" key={song.id}>
                <SongCard
                  songDetails={{
                    songName: song.songName,
                    artist: song.artists,
                    dor: song.dor,
                    rating: song.rating,
                    maxAllowedRating: 5,
                  }}
                />
            </li>);
          })
        }
    </ul>
  );
};

export default SongList;
