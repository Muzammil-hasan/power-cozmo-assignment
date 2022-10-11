import toast from 'react-hot-toast';

export const onSuccess = (msg: string) => {
  toast.success(msg);
};

export const onError = (msg?: string) => {
  toast.error(msg || 'Oops! Something went wrong');
};

export const localSetter = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const formatDate = (date: any, type: 'numeric' | 'alphabetic' = 'alphabetic') => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let newDate = typeof date === 'string' ? new Date(date) : date;

  if (type === 'numeric')
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;

  return `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
};

export const formatTime = (time: any) => {
  var date = time ? new Date(time) : new Date();
  var hours =
    date.getHours() < 10
      ? '0' + date.getHours()
      : date.getHours() > 12
      ? date.getHours() - 12
      : date.getHours();
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  const day_night = date.getHours() < 12 ? 'AM' : 'PM';
  time = hours + ':' + minutes + ' ' + day_night;
  return time;
};

export function insertSpaces(string: string) {
  string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
  string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return string;
}
