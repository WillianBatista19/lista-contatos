import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return <>{children}</>; 
};

export default PrivateRoute;
