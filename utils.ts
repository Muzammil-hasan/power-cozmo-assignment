import toast from 'react-hot-toast';

export const onSuccess = (msg: string) => toast.success(msg);
export const onError = (msg?: string) => toast.error(msg || 'Oops! Something went wrong');
