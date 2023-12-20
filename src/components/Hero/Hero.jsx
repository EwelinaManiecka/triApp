import { useState } from "react";

import css from "./Hero.module.css";

function Hero(props) {
  const [isAbout] = useState(false);
  return (
    <div className={props.cName}>
      <img alt="hero img" src={props.heroImg} />

      <div className={css.heroText}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a
          href={props.url}
          className={(props.btnClass & isAbout && css.show) || css.hide}
          // className={css.show}
          // className={css.hide}
        >
          {/* I use operator tern ? :  <- will check this the same time */}
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
export default Hero;
