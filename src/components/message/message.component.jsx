import { formatTime } from '../../utils/time/time';
import UserIcon from '../user-icon/user-icon.component';
import './message.styles.scss';

const Message = ({ message, currentUser }) => {
    return (
        <div className={`message-container ${currentUser === message.author ? 'first-person' : 'third-person'} `}>
            <div className='detail-bar'>
                {message.author} - 
                {formatTime(message.time)}
            </div>
            <div className='message-body'>
                { currentUser !== message.author ? <UserIcon user={message} /> : null}
                <div className='text-container'>{message.text}</div>
            </div>
        </div>
    )
};

export default Message;