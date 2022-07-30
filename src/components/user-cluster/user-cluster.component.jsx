import UserIcon from '../user-icon/user-icon.component';

import './user-cluster.styles.scss';

const UserCluster = ({ users }) => {
    return (
        <div className='user-cluster'>
            {users.map(user => <UserIcon key={user.id} user={user} />)}
        </div>
    );
};

export default UserCluster;