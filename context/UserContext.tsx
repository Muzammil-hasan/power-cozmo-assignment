import { isEmpty } from 'lodash-es';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const UserContext = createContext<any>({});

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
}

export function UserContextProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User>({} as User);

  /**
   * This should run code SSr function but
   * I don't have an API for taking user using token or ID
   */

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setUser(JSON.parse(user));
    else if (isEmpty(user)) router.push('/account/login');
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
