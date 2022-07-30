import './convo-nav.styles.scss';

const ConvoNav = ({ userCluster, userCount }) => (
    <div className='convo-nav-container'>
        { userCluster }
        <div className='user-count'>
            {userCount} People
        </div>
    </div>
);

export default ConvoNav;