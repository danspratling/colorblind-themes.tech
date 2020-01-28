import environments from "./environments"
import colors from "./colors"

// please remove the comments before you PR
const themes = [
  {
    //Theme name
    name: `Night Owl/Light Owl`,

    //Theme description
    description: `A Visual Studio Code theme for the night owls out there. Fine-tuned for those of us who like to code late into the night.`,

    /*
      Theme Image url
      Images should give a preview of the theme(s)
      Image urls should be relative to the theme image folder (`../images/themes`)
    */
    images: [
      `night-owl/first-screen.jpg`,
      `night-owl/three-dark.jpg`,
      `night-owl/light-owl-full.jpg`,
      `night-owl/three-light.jpg`,
    ],

    //Theme repo url - if possible add the repo which
    repo: `https://github.com/sdras/night-owl-vscode-theme`,

    //Url to theme resource, such as a custom site (optional)
    url: ``,

    //Colorblind options taken from colors.js. Minimum 1
    colors: [
      colors.deuteranopia,
      colors.protanopia,
      colors.triatanopia,
      colors.monochromatic,
    ],

    //environments the theme supports. environments can be found in environments.js. Minimum 1
    environments: [
      environments.vscode,
      environments.atom,
      environments.intelliJIDEA,
      environments.webstorm,
      environments.hyper,
      environments.iTerm2,
      environments.pygments,
      environments.vim,
      environments.visualstudio2019,
      environments.alfred,
      environments.emacs,
      environments.slack,
    ],
  },
  {
    name: `Cobalt2`,
    description: `🔥 Official theme by Wes Bos.`,
    images: [`cobalt2/preview.png`],
    repo: `https://github.com/wesbos/cobalt2-vscode`,
    url: ``,
    colors: [colors.deuteranopia],
    environments: [
      environments.vscode,
      environments.sublimeText,
      environments.atom,
      environments.iTerm2,
      environments.hyper,
      environments.alfred,
      environments.slack,
    ],
  },
  {
    name: `Dracula`,
    description: `A dark theme for many environments, shells, and more`,
    images: [`dracula/screenshot.png`],
    repo: `https://github.com/dracula/`,
    url: `https://draculatheme.com/`,
    colors: [colors.deuteranopia, colors.protanopia],
    environments: [
      environments.vscode,
      environments.notepadPlusPlus,
      environments.vim,
      environments.sublimeText,
      environments.xcode,
      environments.atom,
      environments.emacs,
      environments.intelliJIDEA,
      environments.visualstudio2019,
      environments.iTerm2,
      environments.hyper,
      environments.pygments,
      environments.slack,
      environments.alfred,
    ],
  },
  {
    name: `Noctis`,
    description: `Noctis is a collection of light & dark themes with a well balanced blend of warm and cold colors`,
    images: [
      `noctis/noctis.png`,
      `noctis/noctisAzureus.png`,
      `noctis/noctisBordo.png`,
      `noctis/noctisHibernus.png`,
      `noctis/noctisLilac.png`,
      `noctis/noctisLux.png`,
      `noctis/noctisMinimus.png`,
      `noctis/noctisUva.png`,
      `noctis/noctisViola.png`,
    ],
    repo: `https://github.com/liviuschera/noctis`,
    url: ``,
    colors: [colors.deuteranopia],
    environments: [environments.vscode],
  },
  {
    name: `VSCode Material Theme`,
    description: `The official community maintained Material Theme with "legacy" color schemes you love!`,
    images: [`material/material.png`],
    repo: `https://github.com/equinusocio/vsc-material-theme/`,
    url: `https://material-theme.site/`,
    colors: [colors.deuteranopia],
    environments: [environments.vscode],
  },
]

export default themes
