import moment from 'moment';

/** format the date for ui needs */
export function formatDate(date: string) {
  return moment(date).format('MMM Do YYYY');
}

export function formatYear(date: string | undefined) {
  if (!date) return '____';
  return moment(date).format('YYYY');
}
