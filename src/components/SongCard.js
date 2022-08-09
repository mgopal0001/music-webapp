const SongCard = (props) => {
  const { songName, artist, dor, rating, maxAllowedRating, songIcon } =
    props.songDetails;
  const img = `https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip`;

  const getRatingElement = () => {
    const span = [];

    for (let i = 1; i <= maxAllowedRating; i++) {
      if (i <= rating) {
        span.push(
          <span className="fa fa-star" style={{ color: "orange" }}></span>
        );
      } else {
        span.push(<span className="fa fa-star"></span>);
      }
    }

    return span;
  };

  return (
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
      <div className="p-1 pt-0" style={{ float: "left", width: "auto" }}>
        <p className="h5" style={{ boxSize: "border-box", margin: "0px" }}>
          <strong>{songName}</strong>
        </p>
        <p className="p" style={{ margin: "0px" }}>
          Artist : &nbsp;{artist}
        </p>
        <p className="p" style={{ margin: "0px" }}>
          Date : &nbsp;{new Date(dor).toDateString()}
        </p>
        <div>{getRatingElement()}</div>
      </div>
    </div>
  );
};

export default SongCard;
