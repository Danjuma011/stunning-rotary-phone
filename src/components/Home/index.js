import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../Animatedletters";
import Logo5 from "../../assets/Logo/logo-5.png";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "D", "a", "n", "j", "u", "m", "a", ","];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",

  ];

  useEffect(() => {
    const timeoutFunc = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);

    return () => {
      window.clearTimeout(timeoutFunc);
    };
  }, []);

  return (
    <div className="container home-page ">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>i</span>
          <span className={`${letterClass} _14`}>'m </span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Frontend Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="img-div">
        <img className="" src={Logo5} alt="S" />
      </div>
    </div>
  );
};

export default Home;
