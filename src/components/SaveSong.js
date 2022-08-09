import "./SaveSong.css";

const SaveSong = (props) => {
  const { show, close } = props;

  return (
    <div
      className="login-box"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <button className="close-icon fa-close fa" onClick={close}></button>
      <h2>Add Song</h2>

      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Song Name</label>
        </div>
        <div className="user-box">
          <input type="date" name="" required="" />
          <label>Date of Release</label>
        </div>
        <div className="user-box">
          <input type="file" name="" required="" className="file" id="file" />
          <label for="file">Song</label>
        </div>
        <div className="user-box">
          <input type="file" id="file" className="file" text="Select Song" />
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
