import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CustomSearchField from './CustomSearchField.vue';

describe('CustomSearchField.vue', () => {
  it('renders VTextField with default props', () => {
    const wrapper = mount(CustomSearchField);

    const vTextField = wrapper.findComponent({ name: 'VTextField' });
    expect(vTextField.exists()).toBe(true);

    expect(vTextField.props()).toMatchObject({
      prependInnerIcon: 'mdi-magnify',
      variant: 'outlined',
      hideDetails: true,
      singleLine: true,
      density: 'compact'
    });
  });

  it('overrides default props with passed props', () => {
    const wrapper = mount(CustomSearchField, {
      props: {
        prependInnerIcon: 'mdi-home',
        variant: 'filled',
        hideDetails: false
      }
    });

    const vTextField = wrapper.findComponent({ name: 'VTextField' });

    expect(vTextField.props()).toMatchObject({
      prependInnerIcon: 'mdi-home',
      variant: 'filled',
      hideDetails: false,
      singleLine: true,
      density: 'compact'
    });
  });

  it('passes down attributes correctly', () => {
    const wrapper = mount(CustomSearchField, {
      attrs: {
        id: 'custom-id',
        class: 'custom-class',
        'data-test': 'custom-data'
      }
    });

    const vTextFieldComponent = wrapper.findComponent({ name: 'VTextField' });
    const vTextField = wrapper.find('input');

    expect(vTextField.attributes('id')).toBe('custom-id');
    expect(vTextFieldComponent.classes()).toContain('custom-class');
    expect(vTextFieldComponent.attributes('data-test')).toBe('custom-data');
  });
});
