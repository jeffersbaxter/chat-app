import { useContext, useState } from 'react';
import { MessagesContext } from '../../contexts/messages.context';

import './text-form.styles.scss';

const TextForm = ({ currentUser }) => {
    const { messages, addMessageToList } = useContext(MessagesContext);
    const [message, setMessage] = useState('');

    const addMessageHandler = (event) => {
        event.preventDefault();
        const [text] = event.target;

        const newId = messages.length + 1;
        const newMessage = {
            author: currentUser,
            time: new Date().toDateString(),
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
            <form onSubmit={addMessageHandler}>
                <input 
                    type='text' 
                    placeholder='text message' 
                    name='message' 
                    value={message} 
                    alt='textbox' 
                    onChange={handleChange} />
                <button type="submit">send</button>
            </form>
        </div>
    )
};

export default TextForm;