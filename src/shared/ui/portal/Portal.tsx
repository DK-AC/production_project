import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode
  element?: HTMLElement
}

export const Portal = (props: Props) => {
  const {
    element = document.body,
    children,
  } = props;

  return createPortal(children, element);
};
