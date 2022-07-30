import { useContext, useState } from 'react';
import { ChatContext } from '../../contexts/chat.context';
import { MessagesContext } from '../../contexts/messages.context';

import './text-form.styles.scss';

const TextForm = ({ currentUser }) => {
    const { addMessageToList } = useContext(ChatContext);
    const { messages } = useContext(MessagesContext);
    const [message, setMessage] = useState('');

    const addMessageHandler = (event) => {
        event.preventDefault();
        const [text] = event.target;
        if (!text.value) return;

        const newId = messages.length + 1;
        const newMessage = {
            author: currentUser,
            time: new Date(),
            id: newId + '',
            icon: 'JB',
            text: text.value,
            reactions: []
        };

        setMessage('');

        return addMessageToList(newMessage);
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <div className='input-container'>
            <form onSubmit={addMessageHandler} autoComplete="off">
                <input 
                    type='text' 
                    placeholder='text message' 
                    name='message' 
                    value={message} 
                    alt='textbox' 
                    onChange={handleChange} />
                <button type="submit">&#8593;</button>
            </form>
        </div>
    )
};

export default TextForm;