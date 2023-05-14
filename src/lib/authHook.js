import { useEffect } from 'react';
import { checkAuthenticated } from './auth';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const authenticated = await checkAuthenticated();
      if (!authenticated) {
        navigate("/adminLogin");
      }
      return;
    }
    getUserDetails();
  }, []);
}