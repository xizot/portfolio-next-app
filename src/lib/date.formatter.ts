import dayjs from 'dayjs';

export class DateFormatter {
  static format(date: Date, pattern: string = 'YYYY/MM') {
    return dayjs(date).format(pattern);
  }
}
