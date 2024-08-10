import { useDate } from 'vuetify';
import { timestampToTime } from '../utils/date';

export function useFormatDate(value: number) {
  const date = useDate();
  return date.format(new Date(timestampToTime(value)), 'keyboardDateTime');
}
