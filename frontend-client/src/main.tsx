import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatContainer from './containers/chat/ChatContainer';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChatContainer />
  </React.StrictMode>,
);
