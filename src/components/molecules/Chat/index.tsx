import React from 'react';
import OwnChatComponent from './OwnChat';
import OtherChatComponent from './OtherChat';

interface ChatComponentProps {
  isMe: boolean;
}

const ChatComponent: React.FC<ChatComponentProps> = ({isMe}) => {
  if (isMe) {
    return <OwnChatComponent />;
  }

  return <OtherChatComponent />;
};

export default ChatComponent;
