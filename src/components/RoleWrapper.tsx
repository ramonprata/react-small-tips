
import React from 'react';
import { useRoleInfo } from '../shared/hooks/useRoleInfo';

interface RoleWrapperProps {
  renderEmployeeContent?: () => React.ReactNode;
  renderManagerContent?: () => React.ReactNode;
}

const RoleWrapper: React.FC<RoleWrapperProps> = (props) => {
  const { isEmployee, isManager } = useRoleInfo();

  // improve this as you need..

  const renderContent = () => {
    if (isEmployee) {
      return props.renderEmployeeContent?.();
    }
    if (isManager) {
      return props.renderManagerContent?.();
    }
    return null;
  };

  return <>{renderContent()}</>;
};

export default RoleWrapper;
