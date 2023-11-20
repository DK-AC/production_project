import React, {useState} from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div className={classes.btn}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

