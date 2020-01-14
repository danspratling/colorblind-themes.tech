/*
  Colourblind types the theme supports.
  Full descriptions can be found here http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/
*/

const colors = {
  protanopia: {
    name: "Protanopia",
    description:
      "Affects dark greens, reds, browns and oranges. Sometimes blues with reds, purples or pinks",
  },
  deuteranopia: {
    name: "Deuteranopia",
    description:
      "Affects mid reds & greens, pale greens & yellows, blue-greens with greys & pinks",
  },
  triatanopia: {
    name: "Triatanopia",
    description:
      "Affects light blues & greys, dark purples & blacks, mid-greens & blue, oranges & reds",
  },
  monochromatic: {
    name: "Monochromatic",
    description: "Affects all colors, which are seen as grayscale",
  },
}

export default colors

/**
 * Disclaimer: this site is designed to help those already diagnosed with colorblindness.
 * If you feel you may have colorblindless or are unsure, it is recommended that you see a medical professional.
 * The descriptions here are not meant to be used to self-diagnose colorblindless but help those who are aware
 * they have colorblindless but may have forgotten which type they are affected by.
 */
