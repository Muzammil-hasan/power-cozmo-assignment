import { useEffect, useState } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
}

// if (typeof window !== 'undefined') {

export default function Account() {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setUser(JSON.parse(user));
  }, []);

  return <div className="grid min-h-screen place-content-center">{user.name}</div>;
}
