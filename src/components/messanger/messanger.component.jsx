import { useContext} from 'react';
import { MessagesContext } from '../../contexts/messages.context';
import { UserContext } from '../../contexts/user.context';
import ConvoNav from '../convo-nav/convo-nav.component';
import Message from '../message/message.component';
import TextForm from '../text-form/text-form.component';
import './messanger.styles.scss';

const Messanger = ({ userCluster, currentUser }) => {
    const {messages} = useContext(MessagesContext);
    const {users} = useContext(UserContext);

    return (
        <div className='messanger-container'>
            <ConvoNav 
                userCount={users.length} 
                userCluster={userCluster} />
            <div className='messanger-body'>
                {
                    messages.map(m => (<Message key={m.id} currentUser={currentUser} message={m} />))
                }
            </div>
            <TextForm currentUser={currentUser} />
        </div>
    )
};

export default Messanger;