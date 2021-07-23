export type TRole = 'MANAGER' | 'EMPLOYEE';

export interface IRoleInfo {
  isManager?: boolean;
  isEmployee?: boolean;
  role?: TRole;
}
