import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import Messanger from '../messanger/messanger.component'
import MobileUserCluster from '../user-cluster/mobile-user-cluster.component';

import './mobile-view.styles.scss';

const MobileView = ({ users }) => {
    const {currentUser} = useContext(UserContext);

    return (
        <div className='mobile-view-container'>
            <Messanger 
                currentUser={currentUser}
                userCluster={<MobileUserCluster users={users} />}
                />
        </div>
    );
};

export default MobileView;