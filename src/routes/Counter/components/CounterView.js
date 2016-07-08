import React from 'react'
import Counter from '../../../components/Counter'

export const CounterView = (props) => (
  <div>
    <Counter
      counter={props.counter}
      doubleAsync={props.doubleAsync}
      increment={props.increment} />
  </div>
)

export default CounterView
