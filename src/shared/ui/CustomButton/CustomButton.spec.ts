import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CustomButton from './CustomButton.vue';

describe('CustomButton.vue', () => {
  it('renders with default props', () => {
    const wrapper = mount(CustomButton);

    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.classes()).toContain('v-btn');
    expect(button.classes()).toContain('custom-button');
    expect(button.classes()).toContain('v-btn--variant-flat');
    expect(button.classes()).toContain('bg-primary');
  });

  it('renders with custom props', () => {
    const wrapper = mount(CustomButton, {
      props: {
        variant: 'outlined',
        color: 'secondary'
      }
    });

    const button = wrapper.find('button');
    expect(button.classes()).toContain('text-secondary');
    expect(button.classes()).toContain('v-btn--variant-outlined');
  });

  it('renders slots correctly', () => {
    const wrapper = mount(CustomButton, {
      slots: {
        default: '<span class="slot-content">Click Me</span>'
      }
    });

    const slotContent = wrapper.find('.slot-content');
    expect(slotContent.exists()).toBe(true);
    expect(slotContent.text()).toBe('Click Me');
  });

  it('applies additional attributes', () => {
    const wrapper = mount(CustomButton, {
      attrs: {
        id: 'test-button',
        'data-test': 'example'
      }
    });

    const button = wrapper.find('button');
    expect(button.attributes('id')).toBe('test-button');
    expect(button.attributes('data-test')).toBe('example');
  });
});
