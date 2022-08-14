import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import SongList from "./components/SongList";
import ArtistList from "./components/ArtistList";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import SaveArtist from "./components/SaveArtist";
import SaveSong from "./components/SaveSong";
import Authentication from "./components/Authentication";
import { get } from "./services/request";
import config from "./config";

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
    {
      title: "Signup",
      id: "signup"
    }
  ]);

  const [onPage, setOnPage] = useState(pages[0].id);
  const [toggled, setToggled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setTokenAndAuthenticate = (uAccessToken, uRefreshToken) => {
      localStorage.setItem("u-access-token", uAccessToken);
      localStorage.setItem("u-refresh-token", uRefreshToken);
      setIsAuthenticated(true);
  }

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
    } else if(onPage === pages[3].id) {
      return <Authentication setTokenAndAuthenticate={setTokenAndAuthenticate} />
    }
  };

  const getPopupPage = () => {
    if (pages[0].id === onPage) {
      return <SaveSong show={showPopup} close={closePopup} />;
    } else if (pages[1].id === onPage) {
      return <SaveArtist show={showPopup} close={closePopup} />;
    }
  };

  const setNewAccessToken = async () => {
    const uRefreshToken = localStorage.getItem('u-refresh-token');
    const response = await get(`${config.host}/auth/token`, { 'u-refresh-token': uRefreshToken });
    localStorage.setItem('u-access-token', response.data.uAccessToken);
  }

  const checkIfAuthenticated = async () => {
    try{
      const uAccessToken = localStorage.getItem('u-access-token');
      const response = await get(`${config.host}/user`, { 'u-access-token': uAccessToken });
      return true;
    }catch(err){
      return false;
    }
  }

  useEffect(() => {
    checkIfAuthenticated().then(response => {
      if(response){
        setIsAuthenticated(true);
      }else{
        setNewAccessToken().then(() => {
          setIsAuthenticated(true);
        }).catch(() => {
          setIsAuthenticated(false);
        });
      }
    });
  }, []);

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
