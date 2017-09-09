import Rubicon, { defaultThemeVariables } from './Rubicon'
import noirTheme from './variables/noirThemeVariables'
const getTheme = Rubicon
const RubiconNoir = getTheme(noirTheme)

export {
  getTheme,
  defaultThemeVariables,
  RubiconNoir
}
