import Rubicon, { defaultThemeVariables } from './Rubicon'
import noirThemeVariables from './variables/noirThemeVariables'
const getTheme = Rubicon
const RubiconNoir = getTheme(noirThemeVariables)

export {
  noirThemeVariables,
  getTheme,
  defaultThemeVariables,
  RubiconNoir
}
