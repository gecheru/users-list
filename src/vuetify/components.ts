import type { VuetifyOptions } from 'vuetify';
import { VCard, VCardItem, VCardTitle, VCardActions } from 'vuetify/components/VCard';
import { VContainer, VCol, VRow, VSpacer } from 'vuetify/components/VGrid';
import { VDataTable } from 'vuetify/components/VDataTable';
import { VBtn } from 'vuetify/components/VBtn';
import { VDialog } from 'vuetify/components/VDialog';
import { VDivider } from 'vuetify/components/VDivider';
import { VForm } from 'vuetify/components/VForm';
import { VTextField } from 'vuetify/components/VTextField';
import { VSkeletonLoader } from 'vuetify/components/VSkeletonLoader';
import { VIcon } from 'vuetify/components/VIcon';

export const components: VuetifyOptions['components'] = {
  VCard,
  VCardItem,
  VCardTitle,
  VCardActions,
  VContainer,
  VCol,
  VRow,
  VDataTable,
  VBtn,
  VDialog,
  VSpacer,
  VDivider,
  VForm,
  VTextField,
  VSkeletonLoader,
  VIcon
};
