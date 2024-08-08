export const required = (value: string): boolean | string => {
  return !!value || 'This field is required';
};
