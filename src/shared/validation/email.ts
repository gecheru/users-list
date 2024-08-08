export const email = (value: string): boolean | string => {
  const emailPattern = /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i;
  return emailPattern.test(value) || 'Value is not valid email';
};
