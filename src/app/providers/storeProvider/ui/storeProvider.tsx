import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/stateShema';
import { createReduxStore } from '../config/store';

type Props = {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: Props) => {
  const { initialState, children } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}><>{children}</></Provider>;
};
