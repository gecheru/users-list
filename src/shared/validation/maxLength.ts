export const maxLength = (max: number) => {
  return (value: string) => value.length <= max || `Max value length is:${max}`;
};
