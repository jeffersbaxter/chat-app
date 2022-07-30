import './user-icon.styles.scss';

const UserIcon = ({ user }) => {
    return (
        <span className='user-icon-container'>
            {user.icon}
        </span>
    );
};

export default UserIcon;