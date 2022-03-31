const lang: string = localStorage.getItem("language") || "EN";

export const compliments: string[] =
  lang === "KR"
    ? [
        "경이롭습니다!",
        "근사합니다!",
        "굉장합니다!",
        "놀랍습니다!",
        "대단합니다!",
        "똑똑하군요!",
        "뛰어나군요!",
        "멋집니다!",
        "잘했습니다!",
        "정답입니다!",
        "최고입니다!",
        "타고났군요!",
        "훌륭합니다!",
      ]
    : [
        "Amazing!",
        "Awesome!",
        "Beautiful!",
        "Bravo!",
        "Brilliant!",
        "Clever!",
        "Cool!",
        "Excellent!",
        "Fabulous!",
        "Fantastic!",
        "Good Job!",
        "Great Job!",
        "Impressive!",
        "Incredible!",
        "Magnificent!",
        "Nice!",
        "Outstanding!",
        "Perfect!",
        "Smart!",
        "Terrific!",
        "Wonderful!",
      ];
