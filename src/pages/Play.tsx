import React, { useState } from "react";
import axios from "axios";
import * as S from "../styles/play";

function Home() {
  const [word, setWord] = useState<string>("");
  const [picture, setPicture] = useState();
  let temp: string;

  const Test = () => {
    axios
      .get("https://random-word-form.herokuapp.com/random/noun")
      .then((res: any) => {
        temp = res.data[0];
        axios
          .get(`https://api.pexels.com/v1/search?query=${temp}&per_page=1`, {
            headers: {
              Authorization:
                "563492ad6f9170000100000166d41ae3c98341ae947ae0ad4b543bbc",
            },
          })
          .then((res: any) => {
            setWord(temp);
            setPicture(res.data.photos[0].src.medium);
          })
          .catch((err: any) => {
            console.log(err);
            return;
          });
      })
      .catch((err: any) => {
        console.log(err);
        return;
      });
  };

  return (
    <>
      <button onClick={Test}>
        <img src={picture}></img>
      </button>
      {word}
    </>
  );
}

export default Home;
