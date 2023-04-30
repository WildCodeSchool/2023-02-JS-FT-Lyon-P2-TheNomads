const countries = [
  {
    code: "BR",
    name: "Brazil",
    food: "Portuguese",
    emoji: "🇧🇷",
    unicode: "U+1F1E7 U+1F1F7",
    playListNumber: "3993712262",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
  },

  {
    code: "CA",
    name: "Canada",
    food: "Canadian",
    emoji: "🇨🇦",
    unicode: "U+1F1E8 U+1F1E6",
    playListNumber: "3131375666",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
  },

  {
    code: "CN",
    name: "China",
    food: "Chinese",
    emoji: "🇨🇳",
    unicode: "U+1F1E8 U+1F1F3",
    playListNumber: "9984169982",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
  },

  {
    code: "CY",
    name: "Cyprus",
    food: "Greek",
    emoji: "🇨🇾",
    unicode: "U+1F1E8 U+1F1FE",
    playListNumber: "3129658402",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
  },

  {
    code: "DE",
    name: "Germany",
    food: "Dutch",
    emoji: "🇩🇪",
    unicode: "U+1F1E9 U+1F1EA",
    playListNumber: "10896373864",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
  },

  {
    code: "EG",
    name: "Egypt",
    food: "Egyptian",
    emoji: "🇪🇬",
    unicode: "U+1F1EA U+1F1EC",
    playListNumber: "7479997104",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
  },

  {
    code: "ES",
    name: "Spain",
    food: "Spanish",
    emoji: "🇪🇸",
    unicode: "U+1F1EA U+1F1F8",
    playListNumber: "9951867362",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
  },

  {
    code: "FR",
    name: "France",
    food: "French",
    emoji: "🇫🇷",
    unicode: "U+1F1EB U+1F1F7",
    playListNumber: "8204410762",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
  },

  {
    code: "GB",
    name: "United Kingdom",
    food: "British",
    emoji: "🇬🇧",
    unicode: "U+1F1EC U+1F1E7",
    playListNumber: "10852277382",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
  },

  {
    code: "GR",
    name: "Greece",
    food: "Greek",
    emoji: "🇬🇷",
    unicode: "U+1F1EC U+1F1F7",
    playListNumber: "9853386922",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
  },

  {
    code: "HR",
    name: "Croatia",
    food: "Croatian",
    emoji: "🇭🇷",
    unicode: "U+1F1ED U+1F1F7",
    playListNumber: "6410931084",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
  },

  {
    code: "IE",
    name: "Ireland",
    food: "Irish",
    emoji: "🇮🇪",
    unicode: "U+1F1EE U+1F1EA",
    playListNumber: "1479425305",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
  },
  {
    code: "IL",
    name: "Israel",
    emoji: "🇮🇱",
    unicode: "U+1F1EE U+1F1F1",
    playListNumber: "8974198182",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
  },
  {
    code: "IM",
    name: "Isle of Man",
    emoji: "🇮🇲",
    unicode: "U+1F1EE U+1F1F2",
    playListNumber: "",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
  },
  {
    code: "IN",
    name: "India",
    food: "Indian",
    emoji: "🇮🇳",
    unicode: "U+1F1EE U+1F1F3",
    playListNumber: "10820096842",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },

  {
    code: "IT",
    name: "Italy",
    food: "Italian",
    emoji: "🇮🇹",
    unicode: "U+1F1EE U+1F1F9",
    playListNumber: "6527927304",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
  },

  {
    code: "JM",
    name: "Jamaica",
    food: "Jamaican",
    emoji: "🇯🇲",
    unicode: "U+1F1EF U+1F1F2",
    playListNumber: "2541770444",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
  },

  {
    code: "JP",
    name: "Japan",
    food: "Japanese",
    emoji: "🇯🇵",
    unicode: "U+1F1EF U+1F1F5",
    playListNumber: "11083771982",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
  },
  {
    code: "KE",
    name: "Kenya",
    food: "Kenyan",
    emoji: "🇰🇪",
    unicode: "U+1F1F0 U+1F1EA",
    playListNumber: "10110518342",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
  },

  {
    code: "MA",
    name: "Morocco",
    food: "Moroccan",
    emoji: "🇲🇦",
    unicode: "U+1F1F2 U+1F1E6",
    playListNumber: "7633171922",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
  },

  {
    code: "MX",
    name: "Mexico",
    food: "Mexican",
    emoji: "🇲🇽",
    unicode: "U+1F1F2 U+1F1FD",
    playListNumber: "4188833706",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
  },

  {
    code: "PL",
    name: "Poland",
    food: "Polish",
    emoji: "🇵🇱",
    unicode: "U+1F1F5 U+1F1F1",
    playListNumber: "9860988542",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
  },

  {
    code: "PT",
    name: "Portugal",
    food: "Portuguese",
    emoji: "🇵🇹",
    unicode: "U+1F1F5 U+1F1F9",
    playListNumber: "9981918002",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
  },

  {
    code: "RU",
    name: "Russia",
    food: "Russian",
    emoji: "🇷🇺",
    unicode: "U+1F1F7 U+1F1FA",
    playListNumber: "7590943422",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
  },

  {
    code: "TH",
    name: "Thailand",
    food: "Thai",
    emoji: "🇹🇭",
    unicode: "U+1F1F9 U+1F1ED",
    playListNumber: "11127141484",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
  },

  {
    code: "TN",
    name: "Tunisia",
    food: "Tunisian",
    emoji: "🇹🇳",
    unicode: "U+1F1F9 U+1F1F3",
    playListNumber: "4785102744",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
  },

  {
    code: "TR",
    name: "Turkey",
    food: "Turkish",
    emoji: "🇹🇷",
    unicode: "U+1F1F9 U+1F1F7",
    playListNumber: "2430140302",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
  },

  {
    code: "US",
    name: "United States",
    food: "American",
    emoji: "🇺🇸",
    unicode: "U+1F1FA U+1F1F8",
    playListNumber: "10360746742",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
  },

  {
    code: "VN",
    name: "Vietnam",
    food: "Vietnamese",
    emoji: "🇻🇳",
    unicode: "U+1F1FB U+1F1F3",
    playListNumber: "9586064522",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
  },

  {
    code: "ENGLAND",
    name: "England",
    food: "British",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
    playListNumber: "175809681",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
  },
  {
    code: "SCOTLAND",
    name: "Scotland",
    food: "British",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
    playListNumber: "115696521",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
  },
  {
    code: "WALES",
    name: "Wales",
    food: "British",
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    unicode: "U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
    playListNumber: "7506084504",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
  },
];

export default countries;
