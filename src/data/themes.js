import editors from "./editors"
import colors from "./colors"

// please remove the comments before you PR
const themes = [
  {
    //Theme name
    name: "Panda Theme",

    //Theme description
    description: "Panda syntax theme for Editors, IDEs.",

    //Theme logo, relative to the theme image folder ('../images/themes'). .svg isn't supported yet, please use .png files
    logo: "panda-syntax/logo.png",

    /*
      Theme Image url
      Images should give a preview of the theme(s)
      Image urls should be relative to the theme image folder ("../images/themes")
    */
    images: ["panda-syntax/editor.jpg"],

    //Theme repo url - if possible add the repo which
    repo: "https://github.com/PandaTheme",

    //Url to theme resource, such as a custom site (optional)
    url: "",

    //Colorblind options taken from colors.js. Minimum 1
    colors: [colors.deuteranopia, colors.protanopia],

    //Editors the theme supports. Editors can be found in editors.js. Minimum 1
    editors: [editors.vscode],
  },
  {
    name: "Night Owl/Light Owl",
    description:
      "A Visual Studio Code theme for the night owls out there. Fine-tuned for those of us who like to code late into the night. Color choices have taken into consideration what is accessible to people with colorblindness and in low-light circumstances. Decisions were also based on meaningful contrast for reading comprehension and for optimal razzle dazzle.",
    logo: "night-owl/logo.png",
    images: [
      "night-owl/first-screen.jpg",
      "night-owl/three-dark.jpg",
      "night-owl/light-owl-full.jpg",
      "night-owl/three-light.jpg",
    ],
    repo: "https://github.com/sdras/night-owl-vscode-theme",
    url: "",
    colors: [
      colors.deuteranopia,
      colors.protanopia,
      colors.triatanopia,
      colors.monochromatic,
    ],
    editors: [editors.vscode],
  },
  {
    name: "Dracula",
    description: "A dark theme for many editors, shells, and more",
    logo: "dracula/dracula.png",
    images: ["dracule/screenshot.png"],
    repo: "https://github.com/dracula/",
    url: "https://draculatheme.com/",
    colors: [colors.deuteranopia, colors.protanopia],
    editors: [editors.vscode],
  },
  {
    name: "Cobalt2",
    description: "🔥 Official theme by Wes Bos.",
    logo: "cobalt2/logo.png",
    images: ["cobalt2/preview.png"],
    repo: "https://github.com/wesbos/cobalt2-vscode",
    url: "",
    colors: [colors.deuteranopia],
    editors: [editors.vscode],
  },
  {
    name: "Noctis",
    description:
      "Noctis is a collection of light & dark themes with a well balanced blend of warm and cold colors",
    logo: "noctis/logo.png",
    images: [
      "noctis/noctis.png",
      "noctis/noctisAzureas.png",
      "noctis/noctisBordo.png",
      "noctis/noctisHibernus.png",
      "noctis/noctisLilac.png",
      "noctis/noctisLux.png",
      "noctis/noctisMinimus.png",
      "noctis/noctisUva.png",
      "noctis/noctisViola.png",
    ],
    repo: "https://github.com/liviuschera/noctis",
    url: "",
    colors: [colors.deuteranopia],
    editors: [editors.vscode],
  },
]

export default themes
