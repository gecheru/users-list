import { useDate } from 'vuetify';

export function useFormatDate(value: number) {
  const date = useDate();

  return date.format(value, 'keyboardDateTime');
}
