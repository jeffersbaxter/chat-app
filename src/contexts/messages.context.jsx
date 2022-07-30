import { createContext, useContext } from 'react';
import { ChatContext } from './chat.context';

export const MessagesContext = createContext({
    messages: [],
    getMessages: () => []
});

export const MessagesProvider = ({ children }) => {
    const {messages} = useContext(ChatContext);

    const getMessages = () => messages;

    const value = {
        messages,
        getMessages
    };

    return (
        <MessagesContext.Provider value={value}>
            {children}
        </MessagesContext.Provider>
    );
};