import UserIcon from '../user-icon/user-icon.component';
import './message.styles.scss';

const Message = ({ message, currentUser }) => {
    return (
        <div className={`message-container ${currentUser === message.author ? 'first-person' : 'third-person'} `}>
            <div className='detail-bar'>
                {message.author} - 
                {message.time}
            </div>
            <div className='message-body'>
                { currentUser !== message.author ? <UserIcon user={message} /> : null}
                <div className='text-container'>{message.text}</div>
            </div>
        </div>
    )
};

export default Message;