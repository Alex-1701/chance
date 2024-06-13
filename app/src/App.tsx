import React from 'react';
import EditLayout from './layouts/EditLayout';
import NotCardPage from './pages/NotCardPage';
import UserPage from './pages/UserPage';
import NotDevicePage from './pages/NotDevicePage';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GetWSStatus } from './context/webSocket';

export interface UserI {
  name: string;
  last_name: string;
  city: string;
  points: number;
  img: string;
}

function App() {
  const ws = GetWSStatus();
  const [status, setStatus] = React.useState<string>('disconnected');
  const [statusText, setStatusText] = React.useState<string>('');
  const [user, setUser] = React.useState<UserI>({
    name: '',
    last_name: '',
    city: '',
    points: 0,
    img: '',
  });

  ws.onopen = () => setStatus('connected');
  ws.onclose = () => setStatus('disconnected');
  ws.onmessage = (msg) => {
    const statusText = JSON.parse(msg.data).statusText;
    const userData = JSON.parse(msg.data).userData;

    if (statusText) setStatusText(statusText);
    if (
      userData &&
      userData.name &&
      userData.last_name &&
      userData.city &&
      userData.hasOwnProperty('points') &&
      userData.img
    ) {
      setUser(userData);
    } else {
      setUser({
        name: '',
        last_name: '',
        city: '',
        points: 0,
        img: '',
      });
    }

    setStatus(JSON.parse(msg.data).status);
  };

  const getUserPage = (): React.ReactNode => {
    if (user.name.length === 0) {
      return <NotCardPage />;
    } else return <UserPage user={user} />;
  };

  const getComponent = (): React.ReactNode => {
    switch (status) {
      case 'connected':
        return <NotDevicePage />;
      case 'device_connected':
        return <NotCardPage />;
      case 'card_connected':
        return getUserPage();
      case 'error':
        return <NotCardPage />;
      case 'disconnected':
      default:
        return <CircularProgress />;
    }
  };

  return (
    <>
      <div id="particles-js"></div>
      <EditLayout>{getComponent()}</EditLayout>
    </>
  );
}

export default App;
