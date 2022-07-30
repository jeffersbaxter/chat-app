import { createContext, useState } from 'react';

export const addMessage = (messages, message) => {
    return ([...messages, message])
};

export const MessagesContext = createContext({
    messages: [],
    addMessageToList: () => {}
});

const _messages = [
    {
        author: 'jeffersbaxter',
        icon: 'JB',
        id: '1',
        time: new Date().toDateString(),
        text: 'Hello, World!',
        reactions: []
    },
    {
        author: 'johndoe',
        icon: 'JD',
        id: '2',
        time: new Date().toDateString(),
        text: 'Hey back!!',
        reactions: []
    },
    {
        author: 'jeffersbaxter',
        icon: 'JB',
        id: '3',
        time: new Date().toDateString(),
        text: 'Is this thing on?',
        reactions: []
    }
];

export const MessagesProvider = ({ children }) => {
    const [messages, setMessages] = useState(_messages);

    const addMessageToList = (message) => setMessages(addMessage(messages, message));

    const value = {
        messages,
        addMessageToList
    };

    return (
        <MessagesContext.Provider value={value}>
            {children}
        </MessagesContext.Provider>
    );
};