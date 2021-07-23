import { createContext } from 'react';
import { IRoleInfo } from '../types';

const UserRoleContext = createContext<Partial<IRoleInfo>>({});

export default UserRoleContext;
