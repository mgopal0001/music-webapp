import SongCard from "./SongCard";
import config from "../config";

const SongList = (props) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <SongCard
          songDetails={{
            songName: "Tum hi ho",
            artist: "Arijit Singh",
            dor: "2022-08-10",
            rating: 4,
            maxAllowedRating: 5,
          }}
        />
      </li>
      <li className="list-group-item">
        <SongCard
          songDetails={{
            songName: "Tu mila to hai na",
            artist: "Arijit Singh",
            dor: "2017-03-24",
            rating: 3,
            maxAllowedRating: 5,
          }}
        />
      </li>
    </ul>
  );
};

export default SongList;
