import { format, parseISO } from 'date-fns';

function formatDate(date) {
  return format(parseISO(date), 'EEEE, MMMM, d, yyyy');
}

function formatCreatedAt(date) {
  return format(parseISO(date), 'MMMM, d, yyyy');
}

function formatTime(time) {
  return format(parseISO(time), 'h:mm a');
}

export { formatDate, formatTime, formatCreatedAt };
