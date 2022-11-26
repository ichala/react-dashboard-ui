import { useState, createContext } from 'react';
import generateRandomUsers from '../../@FakeDB/generate';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Users, setUsers] = useState(generateRandomUsers(50));
  return (
    <DataContext.Provider value={{
      Users, setUsers,
    }}
    >
      {children}
    </DataContext.Provider>
  );
};
