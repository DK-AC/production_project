import { Modal } from 'shared/ui/modal/ui/Modal';
import { useState } from 'react';
import { LoginForm } from '../loginForm/loginForm';
import cls from './loginModal.module.scss';

type Props = {}

export const LoginModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal className={cls.loginModal} onClose={onClose} isOpen={isOpen}>
      <LoginForm />
    </Modal>
  );
};
