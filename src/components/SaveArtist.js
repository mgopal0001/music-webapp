import "./SaveSong.css";

const SaveSong = (props) => {
  const { show, close } = props;

  return (
    <div
      className="login-box"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <button className="close-icon fa-close fa" onClick={close}></button>
      <h2>Add Artist</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input type="date" name="" required="" />
          <label>Date of Birth</label>
        </div>
        <div className="user-box">
          <textarea name="" required="" />
          <label>Bio</label>
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

export default SaveSong;
