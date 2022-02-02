import react, { useState, useEffect } from "react";
import logo from "../assets/logo/logo@1x.png";
import james from '../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png';
import davis from '../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png';
import gordon from '../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png';
import siakam from '../assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png';
import leonard from '../assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png';
import lowry from '../assets/headshots/Kyle-Lowry-PLP59D70927DF104.png';
import russell from '../assets/headshots/Dangelo Russell PLP59D709255D994v4.png';
import notifyMe from '../assets/icons/notify-me.svg'
import deposite from '../assets/icons/money-bag.svg'
import progressBar from "../assets/icons/progress.svg";
import apple from "../assets/icons/ios-app.svg"
import google from "../assets/icons/google-play.svg"
const Main = () => {
  const url =
    "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json";
  const footerTab = [
    "ABOUT",
    "PLB BONUS",
    "CONTACT",
    "SECURITY",
    "RESPONSIBLE PLAY",
    "PRIVACY",
    "TERMS",
  ];
  const playersImg = {
    James: james,
    Davis: davis,
    Gordon: gordon,
    Siakam: siakam,
    Leonard: leonard,
    Lowry: lowry,
    Russell: russell,
  };
  const imgPath = "../assets/headshots/";
  const [players, setPlayers] = useState([]);
  const getPlayers = async () => {
    try {
      let getPlayers = await fetch(url, {
        mode: "cors",
      });
      let jsonPlayer = await getPlayers.json();
      setPlayers(jsonPlayer.players);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPlayers();
  }, []);
  return (
    <div className="container">
      <img style={{margin:"30px"}} src={logo}></img>
      <div className="main-container">
        <img src={progressBar}></img>
        <h1> YOUR PLAYLINE IS SET!</h1>
        <h3 style={{color:"#464646"}}>COME BACK @ 7:30PM TO TRACK IT LIVE!</h3>
        <hr></hr>
        <p className="grey">
          Pro Tip: You can manage your PlayLine's until they go live in the
          Upcoming area
        </p>
        {/* PLAYERS  */}
        <div className="players">
          {players.map((player, index) => (
            <div className="player" key={index} style={{zIndex: 100-index}} >
              <img  className="playerPic" src={playersImg[player.last_name]}/>

              <p style={{    textTransform: "uppercase"}}>{player.last_name}</p>
              <div className="points">{player.points}</div>
              <div>PTS</div>
            </div>
          ))}
        </div>

        <div className="row">
          <button className="btn space"><img className="btn-img" src={notifyMe}/>
         NOTIFY ME </button>

          <button className="btn space"><img className="btn-img" src={deposite}/>DEPOSTIE </button>
        </div>
        <hr></hr>
        <h5> DOWNLOAD THE APP</h5>
        <div className="row">
          <a className="space" href="apple">
            <img src={apple}></img>
          </a>
          <a className="space" href="google">
            <img src={google}></img>
          </a>
        </div>
      </div>
      <footer>
        {footerTab.map((i) => (
          <p key={i} className="footerTitle">
            {i}
          </p>
        ))}
      </footer>
    </div>
  );
};
export default Main;
