import { createContext, useState } from 'react';

export const UserContext = createContext({
    setCurrentUser: () => 'jeffersbaxter',
    currentUser: null,
    users: []
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('jeffersbaxter');
    const [users] = useState([{author: 'jeffersbaxter', icon: 'JB', id: 'a1'}, {author: 'john doe', icon: 'JD', id: 'a2'}]);

    return <UserContext.Provider value={{currentUser, setCurrentUser, users}}>{children}</UserContext.Provider>
}