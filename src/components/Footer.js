const Footer = (props) => {
  const { openPopup } = props;

  return (
    <div className="footer">
      <footer>&copy; Copyright 2022 DeltaX</footer>
      <div className="fab-container mb-5">
        <button
          className="button iconbutton btn btn-outline-light"
          onClick={openPopup}
        >
          <i className="fa fa fa-plus" style={{ fontSize: "20px" }}></i>
        </button>
      </div>
    </div>
  );
};

export default Footer;
