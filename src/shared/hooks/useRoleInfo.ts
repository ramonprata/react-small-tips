import { useContext } from 'react';
import UserRoleContext from '../contexts/UserRoleContext';

export const useRoleInfo = () => {
  const roleInfo = useContext(UserRoleContext);
  // add more code as you need
  return {
    ...roleInfo,
  };
};
