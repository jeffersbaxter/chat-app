import { createContext, useState } from 'react';

export const addMessage = (messages, message) => {
    return ([...messages, message])
};

export const ChatContext = createContext({
    messages: [],
    addMessageToList: () => {}
});

const date = new Date();
date.setDate(29);
date.setFullYear(2021);
const _messages = [
    {
        author: 'jeffersbaxter',
        icon: 'JB',
        id: '1',
        time: date,
        text: 'Hello, World!',
        reactions: []
    },
    {
        author: 'johndoe',
        icon: 'JD',
        id: '2',
        time: date,
        text: 'Hey back!!',
        reactions: []
    },
    {
        author: 'jeffersbaxter',
        icon: 'JB',
        id: '3',
        time: date,
        text: 'Is this thing on?',
        reactions: []
    }
];

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState(_messages);

    const addMessageToList = (message) => setMessages(addMessage(messages, message));

    const value = {
        messages,
        addMessageToList
    };

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
};