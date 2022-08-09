import "./ArtistCard.css";

const ArtistCard = (props) => {
  const { artist, dob, songs, artistIcon } = props.artistDetails;
  const img = `https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg`;
  const img1 = `https://static.toiimg.com/photo/msid-87782835/87782835.jpg`;

  return (
    <>
      <div className="py-1">
        <div className="p-1" style={{ float: "right", width: "auto" }}>
          <img
            style={{
              width: "5em",
              height: "5em",
              objectFit: "cover",
              outline: "2px solid #CCC",
              borderRadius: "6px",
            }}
            src={img}
            alt="Card image cap"
          />
        </div>
        <div
          className="songs"
          style={{
            width: "auto",
            height: "auto",
            margin: "0px",
          }}
        >
          <div className="p-1 pt-0" style={{ float: "left", width: "auto" }}>
            <p className="h5" style={{ boxSize: "border-box" }}>
              <strong>{artist}</strong>
            </p>
            <p className="p" style={{ margin: "0px" }}>
              Date of Birth : &nbsp;{new Date(dob).toDateString()}
            </p>
            <p
              className="song-list"
              style={{
                marginTop: "0px",
                marginBottom: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <strong>Songs</strong> : &nbsp;
            </p>
            {songs.map((song, idx) => {
              return (
                <>
                  <i key={song.songId}>
                    <a
                      className="song-list"
                      key={song.songId}
                      style={{ paddingLeft: "0px", paddingRight: "0px" }}
                    >
                      {song.songName + (idx === songs.length - 1 ? "" : ",")}{" "}
                      &nbsp;
                    </a>
                  </i>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistCard;
