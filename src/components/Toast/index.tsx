import React, { MouseEventHandler, useEffect } from 'react';

import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const Toast: React.FC<ToastProps> = ({ message, style, onClick }) => {

  return (
    <Container
      type={message.type}
      hasdescription={Number(Boolean(message.description))}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>

        {message.description && <p>{message.description}</p>}
      </div>
      <button
        type="button"
        onClick={onClick}
      >
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;