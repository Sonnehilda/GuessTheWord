import React, { useState } from "react";
import axios from "axios";
import * as S from "../styles/play";

import Input from "../components/Input";

function Home() {
  const [word, setWord] = useState<string>("");
  const [meaning, setMeaning] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [similarity, setSimilarity] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  let temp: string = "";
  let temp2: string = "";

  const Test = () => {
    axios
      .get("https://random-word-form.herokuapp.com/random/noun")
      .then((res: { data: string }) => {
        temp = res.data[0];
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${temp}`)
          .then((res) => {
            temp2 = res.data[0].meanings[0].definitions[0].definition;
          })
          .catch(() => {
            return;
          });
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
            setMeaning(temp2);
            temp = "";
          })
          .catch(() => {
            return;
          });
      })
      .catch(() => {
        return;
      });
  };

  return (
    <>
      {!picture && <S.Button onClick={Test}>START</S.Button>}
      {picture && (
        <>
          <S.Image src={picture}></S.Image>
          {meaning && <S.Meaning>{meaning}</S.Meaning>}
          {status === true && <S.Word>{word}</S.Word>}
          <Input
            word={word}
            temp={temp}
            status={status}
            setStatus={setStatus}
            setSimilarity={setSimilarity}
          />
          {similarity && <S.Meaning>{similarity * 100} %</S.Meaning>}
        </>
      )}
    </>
  );
}

export default Home;
