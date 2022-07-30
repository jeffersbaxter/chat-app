import MobileUserIcon from '../user-icon/mobile-user-icon.component';

import './user-cluster.styles.scss';

const MobileUserCluster = ({ users }) => {
    return (
        <div className='user-cluster'>
            {users.map(user => <MobileUserIcon key={user.id} user={user} />)}
        </div>
    );
};

export default MobileUserCluster;