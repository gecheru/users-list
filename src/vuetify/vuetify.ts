import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import { lightTheme } from './theme';
import { components } from './components';

export const vuetify = createVuetify({
  components,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme
    }
  },
  defaults: {
    VDialog: {
      maxWidth: '400px'
    }
  }
});
