import { IRoleInfo, TRole } from '../types';

export class UserService {
  getUserRole(): Promise<IRoleInfo> {
    // call some API
    // get data
    // return role info
    const userRole = localStorage.getItem('userRole') as TRole;

    return new Promise((res) =>
      res({
        role: userRole,
        isManager: userRole === 'MANAGER',
        isEmployee: userRole === 'EMPLOYEE',
      })
    );
  }
}
