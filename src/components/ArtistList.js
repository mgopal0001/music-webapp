import { useState } from "react";
import ArtistCard from "./ArtistCard";

const ArtistList = (props) => {
  const [artists, setArtists] = useState([
    {
      id: "a_s",
      name: "Arijit Singh",
      dob: "2022-08-10",
      songs: [
        { songId: 2, songName: "Tum hi ho" },
        { songId: 1, songName: "Tu mila to hai na" },
        { songId: 1, songName: "Saware" },
      ],
    },
    {
      id: "j_n",
      name: "Jubin Nautiyal",
      dob: "1990-08-10",
      songs: [
        { songId: 2, songName: "Barsaat ki Dhun" },
        { songId: 1, songName: "Mast Nazaron se" },
        { songId: 1, songName: "Bewafa" },
      ],
    },
  ]);

  return (
    <ul className="list-group">
      {artists.map((artist) => {
        return (
          <li key={artist.id} className="list-group-item">
            <ArtistCard
              artistDetails={{
                artist: artist.name,
                dob: artist.dob,
                songs: artist.songs,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistList;
