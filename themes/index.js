import Rubicon, { defaultThemeVariables } from './themes/Rubicon'
import blueTheme from './variables/blueThemeVariables.json'
import noirTheme from './variables/noirThemeVariables.json'
import roseTheme from './variables/roseThemeVariables.json'
const getTheme = Rubicon
const themes = {
  Rubicon,
  RubiconBleu: Rubicon(blueTheme),
  RubiconNoir: Rubicon(noirTheme),
  RubiconRose: Rubicon(roseTheme)
}

export {
  getTheme,
  defaultThemeVariables,
  themes
}
