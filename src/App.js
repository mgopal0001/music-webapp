import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SongList from "./components/SongList";
import ArtistList from "./components/ArtistList";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import SaveArtist from "./components/SaveArtist";
import SaveSong from "./components/SaveSong";
function App() {
  const pages = Object.freeze([
    {
      title: "Songs",
      id: "songs",
    },
    {
      title: "Artist",
      id: "artists",
    },
    {
      title: "About",
      id: "about",
    },
  ]);

  const [onPage, setOnPage] = useState(pages[0].id);
  const [toggled, setToggled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    console.log("close Click");
    setShowPopup(false);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const toggle = () => {
    console.log("Toggle Click");
    setToggled((prevState) => {
      return !prevState;
    });
  };

  const handlePageClick = (pageId) => {
    setOnPage(pageId);
    setToggled(false);
  };

  const getPageComponent = () => {
    if (onPage === pages[0].id) {
      return <SongList show={showPopup} close={closePopup} />;
    } else if (onPage === pages[1].id) {
      return <ArtistList show={showPopup} close={closePopup} />;
    } else {
    }
  };

  const getPopupPage = () => {
    if (pages[0].id === onPage) {
      return <SaveSong show={showPopup} close={closePopup} />;
    } else if (pages[1].id === onPage) {
      return <SaveArtist show={showPopup} close={closePopup} />;
    }
  };

  return (
    <>
      <Navbar
        pages={pages}
        onPage={onPage}
        handleClick={handlePageClick}
        toggled={toggled}
        handleToggleClick={toggle}
      />
      <div className="py-5"></div>
      {getPageComponent()}
      {getPopupPage()}
      <Footer openPopup={openPopup} />
    </>
  );
}

export default App;
