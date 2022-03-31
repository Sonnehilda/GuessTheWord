const Click = require("../assets/sfxes/click.mp3");
const Hover = require("../assets/sfxes/hover.mp3");

const HoverSFX = new Audio(Hover);
const ClickSFX = new Audio(Click);

let savedSfxVolume: number = localStorage.getItem("sfxvolume")
  ? parseInt(localStorage.getItem("sfxvolume") || "")
  : 75;
let savedSfxToggle: string = localStorage.getItem("sfxtoggle") || "true";

const updateValues = () => {
  savedSfxVolume = localStorage.getItem("sfxvolume")
    ? parseInt(localStorage.getItem("sfxvolume") || "")
    : 75;
  savedSfxToggle = localStorage.getItem("sfxtoggle") || "true";
};

export const updateSettings = () => {
  updateValues();
};

export const onHover = () => {
  if (savedSfxToggle === "true") {
    HoverSFX.pause();
    HoverSFX.volume = savedSfxVolume / 100;
    HoverSFX.currentTime = 0;
    HoverSFX.play();
  }
};

export const onClick = () => {
  if (savedSfxToggle === "true") {
    ClickSFX.pause();
    ClickSFX.volume = savedSfxVolume / 100;
    ClickSFX.currentTime = 0;
    ClickSFX.play();
  }
};
