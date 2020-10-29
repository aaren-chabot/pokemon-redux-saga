// light20 = Lightened 20%
// dark20 = Darkened 20%
// base = Root Colour

const colours = {
  primary: {
    base: '#fffffe'
  },
  secondary: {
    base: '#ff5470',
    dark20: '#CC213D',
    light20: '#FF87A3'
  },
  tertiary: {
    base: '#fde24f',
    dark20: '#CAAF1C',
    light20: '#FFFF82'
  },
  highlight: {
    base: '#00ebc7',
    dark20: '#00B894',
    light20: '#33FFFA'
  },
  stroke: {
    base: '#00214d',
    dark20: '#00001A',
    light20: '335480'
  },
}

const elements = {
  background: colours.primary.base,
  button: {
    background: colours.highlight.base,
    text: colours.stroke.base
  },
  link: {
    base: colours.highlight.base,
    hover: colours.highlight.dark20
  }
}
 const typography = {
  heading: colours.stroke.base,
  body: '#1b2d45'
}

export { colours, elements, typography };
