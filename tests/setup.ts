import { beforeEach } from 'vitest';
import { config } from '@vue/test-utils';
import { vuetify } from '@/vuetify/vuetify';

export function setupVuetify() {
  beforeEach(() => {
    config.global.plugins = [vuetify];
  });
}

setupVuetify();
