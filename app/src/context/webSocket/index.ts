import React from 'react';

const ws: WebSocket = new WebSocket(`ws://localhost:8000`);

const wsContext = React.createContext<WebSocket>(ws);

const GetWSStatus = (): WebSocket => {
  return React.useContext<WebSocket>(wsContext);
};

export { GetWSStatus };
