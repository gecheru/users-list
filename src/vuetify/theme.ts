import { type ThemeDefinition } from 'vuetify';
import colors from 'vuetify/util/colors';

export const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.shades.white,
    primary: colors.blue.darken1,
    secondary: colors.blue.lighten4,
    error: colors.red.darken1,
    success: colors.green.darken1,
    warning: colors.orange.darken1
  }
};
