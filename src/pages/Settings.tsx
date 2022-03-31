import React, { useEffect, useRef } from "react";
import { onClick, onHover, updateSettings } from "../assets/sfxFunc";
import * as S from "../styles/settings";

const Theme = require("../assets/bgms/theme.mp3");

function Settings() {
  const BGM = new Audio(Theme);
  const savedBgmVolume: number = localStorage.getItem("bgmvolume")
    ? parseInt(localStorage.getItem("bgmvolume") || "")
    : 75;
  const savedSfxVolume: number = localStorage.getItem("sfxvolume")
    ? parseInt(localStorage.getItem("sfxvolume") || "")
    : 75;
  let savedBgmToggle: boolean = JSON.parse(
    localStorage.getItem("bgmtoggle") || "true"
  );
  let savedSfxToggle: boolean = JSON.parse(
    localStorage.getItem("sfxtoggle") || "true"
  );

  const lang = localStorage.getItem("language") || "EN";

  const bgmVolumeBar = useRef<any>();
  const bgmVolumeDisplay = useRef<any>();
  const sfxVolumeBar = useRef<any>();
  const sfxVolumeDisplay = useRef<any>();
  const bgmSwitch = useRef<any>();
  const sfxSwitch = useRef<any>();
  const langSelect = useRef<any>();

  useEffect(() => {
    BGM.loop = true;
    BGM.volume = savedBgmVolume / 100;

    onFocus();
    if (savedBgmToggle === true) {
      BGM.play();
      window.addEventListener("focus", onFocus);
      window.addEventListener("blur", onBlur);
      window.addEventListener("mousemove", onFirstJoin);
    }

    return () => {
      onBlur();
      BGM.pause();
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("mousemove", onFirstJoin);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFocus = () => {
    BGM.volume = savedBgmVolume / 100;
    if (savedBgmToggle === true && BGM.paused === true) BGM.play();
  };

  const onBlur = () => {
    BGM.volume = 0;
  };

  const onFirstJoin = () => {
    window.removeEventListener("mousemove", onFirstJoin);
    if (savedBgmToggle === true && BGM.paused) {
      BGM.volume = savedBgmVolume / 100;
      BGM.play();
    }
  };

  const changeBgmVolumeStart = () => {
    BGM.volume = bgmVolumeBar.current.value / 100;
    bgmVolumeDisplay.current.innerHTML = bgmVolumeBar.current.value;
  };

  const changeBgmVolumeEnd = () => {
    localStorage.setItem("bgmvolume", bgmVolumeBar.current.value);
    updateSettings();
  };

  const changeSfxVolumeStart = () => {
    sfxVolumeDisplay.current.innerHTML = sfxVolumeBar.current.value;
  };

  const changeSfxVolumeEnd = () => {
    localStorage.setItem("sfxvolume", sfxVolumeBar.current.value);
    updateSettings();
  };

  const toggleBgm = () => {
    localStorage.setItem("bgmtoggle", `${!bgmSwitch.current.checked}`);
    if (bgmSwitch.current.checked) BGM.pause();
    else BGM.play();
  };

  const toggleSfx = () => {
    localStorage.setItem("sfxtoggle", `${!sfxSwitch.current.checked}`);
    updateSettings();
  };

  const changeLang = () => {
    localStorage.setItem("language", langSelect.current.value);
    window.location.reload();
  };

  return (
    <>
      <S.Wrapper>
        <S.TextWrapper>
          <S.Text>{lang === "KR" ? "음악 볼륨" : "Music Volume"}</S.Text>
          <S.Checkbox
            type="checkbox"
            ref={bgmSwitch}
            id="bgm"
            defaultChecked={savedBgmToggle}
          />
          <S.Label
            htmlFor="bgm"
            onMouseEnter={onHover}
            onClick={() => {
              toggleBgm();
              onClick();
            }}
          >
            <S.Button></S.Button>
          </S.Label>
        </S.TextWrapper>
        <S.Range
          type="range"
          min="0"
          max="100"
          ref={bgmVolumeBar}
          onInput={changeBgmVolumeStart}
          onMouseUp={changeBgmVolumeEnd}
          onMouseEnter={onHover}
          onMouseDown={onClick}
          defaultValue={savedBgmVolume}
        />
        <S.Value ref={bgmVolumeDisplay}>{savedBgmVolume}</S.Value>
      </S.Wrapper>

      <S.Wrapper>
        <S.TextWrapper>
          <S.Text>{lang === "KR" ? "효과음 볼륨" : "SFX Volume"}</S.Text>
          <S.Checkbox
            ref={sfxSwitch}
            type="checkbox"
            id="sfx"
            defaultChecked={savedSfxToggle}
          />
          <S.Label
            onMouseEnter={onHover}
            onClick={() => {
              toggleSfx();
              onClick();
            }}
            htmlFor="sfx"
          >
            <S.Button></S.Button>
          </S.Label>
        </S.TextWrapper>
        <S.Range
          type="range"
          min="0"
          max="100"
          ref={sfxVolumeBar}
          onInput={changeSfxVolumeStart}
          onMouseUp={() => {
            changeSfxVolumeEnd();
            onClick();
          }}
          onMouseEnter={onHover}
          defaultValue={savedSfxVolume}
        />
        <S.Value ref={sfxVolumeDisplay}>{savedSfxVolume}</S.Value>
      </S.Wrapper>

      <S.Wrapper>
        <S.TextWrapper>
          <S.Text>{lang === "KR" ? "언어" : "Language"}</S.Text>
        </S.TextWrapper>
        <S.Lang ref={langSelect} onChange={changeLang} defaultValue={lang}>
          <option value="EN">English</option>
          <option value="KR">Korean</option>
        </S.Lang>
      </S.Wrapper>
    </>
  );
}

export default Settings;
