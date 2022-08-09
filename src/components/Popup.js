const Popup = (Component) => {
  return function WithComponent({ ...props }) {
    const { show, closePopup } = props;
    return (
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{
          display: `${show ? "block" : "none"}`,
        }}
      >
        <div className="Popup" style={{}}>
          <div
            className="modal-dialog modal-dialog-centered modal-open"
            role="document"
            style={{}}
          >
            <div className="modal-content">
              <div className="modal-header modal-title">
                <div className="modal-body">
                  <Component {...props} />
                </div>
                <button type="button" className="" onClick={closePopup}>
                  <i className="fa fa-close"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Popup;
