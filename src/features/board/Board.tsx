
import React from 'react';
import RoleWrapper from '../../components/RoleWrapper';
import EmployeeContent from './EmployeeContent';
import ManagerContent from './ManagerContent';

interface BoardProps { }

const Board: React.FC<BoardProps> = () => {

  return <div>
    <h4>Any user can see the title. But..</h4>
    <RoleWrapper
      renderEmployeeContent={() => <EmployeeContent />}
      renderManagerContent={() => <ManagerContent />}
    />
  </div>
};

export default Board;