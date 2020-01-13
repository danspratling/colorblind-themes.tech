import editors from "./editors"

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
    images: [
      "https://cdn.rawgit.com/tinkertrain/panda-syntax-vscode/master/assets/editor.jpg",
    ],

    //Theme repo url (optional)
    repo: "https://github.com/PandaTheme",

    //Url to theme resource or marketplace
    url: "",

    /*
      Colourblind types the theme supports
      Colourblind options:
        Protanopia, Deuteranopia, Tritanopia, Monochromatic
      Descriptions can be found here http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/
    */
    colors: ["Protanopia"],

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
    colors: ["Protanopia", "Deuteranopia", "Triatanopia", "Monochromatic"],
    editors: [editors.vscode],
  },
]

export default themes
