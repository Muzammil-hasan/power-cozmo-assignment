import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function FormWrapper({ children }: Props) {
  return (
    <div className="w-full max-w-md p-10 bg-white rounded-md shadow-xl ring-1 ring-gray-200">
      {children}
    </div>
  );
}
