import { useEffect, useState } from 'react';
import './App.css';
import UserRoleContext from './shared/contexts/UserRoleContext';
import { IRoleInfo } from './shared/types';
import { UserService } from './shared/services/UserService';
import Board from './features/board/Board';

function App() {

  const [roleInfo, setRoleInfo] = useState<IRoleInfo>({
    role: undefined,
    isEmployee: false,
    isManager: false
  });

  useEffect(() => {
    const service = new UserService();

    const loadUserRole = async () => {
      try {
        const role = await service.getUserRole();
        setRoleInfo(role);
      } catch (error) {
        // handle error
      }
    }

    loadUserRole();
  }, []);

  return (
    <UserRoleContext.Provider value={roleInfo}>
      <div className="App">
        <header className="App-header">
          My private area
          <Board />
        </header>
      </div>
    </UserRoleContext.Provider>
  );
}

export default App;
