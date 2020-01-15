import editors from "./editors"
import colors from "./colors"

// please remove the comments before you PR
const themes = [
  {
    //Theme name
    name: "Panda Theme",

    //Theme description
    description: "Panda syntax theme for Editors, IDEs.",

    //Theme logo
    logo: "https://avatars1.githubusercontent.com/u/19749284?s=200&v=4",

    /*
      Theme Image url
      Images should give a preview of the theme (1 image per environment)
    */
    images: ["/images/panda-syntax/editor.jpg"],

    //Theme repo url (optional)
    repo: "https://github.com/PandaTheme",

    //Url to theme resource or marketplace
    url: "",

    //Colorblind options taken from colors.js
    colors: [colors.deuteranopia],

    //Editors the theme supports. Editors can be found in editors.js
    editors: [editors.vscode],
  },
  {
    name: "Night Owl/Light Owl",
    description:
      "A Visual Studio Code theme for the night owls out there. Fine-tuned for those of us who like to code late into the night. Color choices have taken into consideration what is accessible to people with colorblindness and in low-light circumstances. Decisions were also based on meaningful contrast for reading comprehension and for optimal razzle dazzle.",
    logo:
      "https://sdras.gallerycdn.vsassets.io/extensions/sdras/night-owl/1.1.3/1555060598709/Microsoft.VisualStudio.Services.Icons.Default",
    images: [
      "https://github.com/sdras/night-owl-vscode-theme/raw/master/first-screen.jpg",
      "https://github.com/sdras/night-owl-vscode-theme/raw/master/three-dark.jpg",
      "https://github.com/sdras/night-owl-vscode-theme/raw/master/light-owl-full.jpg",
      "https://github.com/sdras/night-owl-vscode-theme/raw/master/three-light.jpg",
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
]

export default themes
