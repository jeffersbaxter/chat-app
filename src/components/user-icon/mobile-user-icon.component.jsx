import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import './user-icon.styles.scss';
import './mobile-user-icon.styles.scss';

const MobileUserIcon = ({ user }) => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleClick = () => {
        setCurrentUser(user.author);
    };

    return (
        <span onClick={handleClick} className={`user-icon-container ${user.author === currentUser ? 'is-current-user' : ''}`}>
            {user.icon}
        </span>
    );
};

export default MobileUserIcon;