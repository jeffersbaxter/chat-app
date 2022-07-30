import { useEffect, useState } from 'react';
import './App.scss';
import Messanger from './components/messanger/messanger.component';
import MobileView from './components/mobile-view/mobile-view.component';
import UserCluster from './components/user-cluster/user-cluster.component';
import { MessagesProvider } from './contexts/messages.context';
import { UserProvider } from './contexts/user.context';
import { getWidth } from './utils/window/width';

function App() {
  const users = [{author: 'jeffersbaxter', icon: 'JB', id: 'a1'}, {author: 'johndoe', icon: 'JD', id: 'a2'}];
  let [isMobile, setIsMobile] = useState(getWidth() <= 480);

  useEffect(() => {
    const handleResize = (event) => {
      const width = getWidth();
      setIsMobile(width <= 575);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="App">
      {isMobile ? 
        <div className='small-view'>
          <MessagesProvider>
            <UserProvider>
              <MobileView users={users} />
            </UserProvider>
          </MessagesProvider>
        </div> : 
        <div className='large-view'>
          <MessagesProvider>
            <UserProvider>
              <Messanger 
                userCluster={<UserCluster users={users} />}
                currentUser={'jeffersbaxter'} />
            </UserProvider>
          </MessagesProvider>
          <MessagesProvider>
            <UserProvider>
              <Messanger userCluster={<UserCluster users={users} />} currentUser={'johndoe'} />
            </UserProvider>
          </MessagesProvider>
        </div>
      }
    </div>
  );
}

export default App;
