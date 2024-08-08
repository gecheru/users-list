import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VCard, VCardItem, VCardTitle, VCardActions } from 'vuetify/components/VCard';
import { VContainer, VCol, VRow, VSpacer } from 'vuetify/components/VGrid';
import { VTable } from 'vuetify/components/VTable';
import { VBtn } from 'vuetify/components/VBtn';
import { VDialog } from 'vuetify/components/VDialog';
import { VDivider } from 'vuetify/components/VDivider';
import { VForm } from 'vuetify/components/VForm';
import { VTextField } from 'vuetify/components/VTextField';
import { lightTheme } from './theme';

const Vuetify = createVuetify({
  components: {
    VCard,
    VCardItem,
    VCardTitle,
    VCardActions,
    VContainer,
    VCol,
    VRow,
    VTable,
    VBtn,
    VDialog,
    VSpacer,
    VDivider,
    VForm,
    VTextField
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme
    }
  },
  defaults: {
    VDialog: {
      maxWidth: '400px'
    },
    VBtn: {
      variant: 'flat',
      baseColor: 'primary'
    },
    VTextField: {
      density: 'compact',
      baseColor: 'primary',
      bgColor: 'background',
      variant: 'underlined',
      color: 'primary'
    }
  }
});

export default Vuetify;
