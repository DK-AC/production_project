import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { StateSchema } from '../config/stateShema'
import { createReduxStore } from '../config/store'

type Props = {
  children?: ReactNode
  initialState?: StateSchema
}

export const StoreProvider = (props: Props) => {
  const { initialState, children } = props

  const store = createReduxStore(initialState)

  return <Provider store={store}>{children}</Provider>
}
