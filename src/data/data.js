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
    colors: [],

    //Editors the theme supports. Editors can be found in editors.js
    editors: [editors.vscode],
  },
]

export default themes
