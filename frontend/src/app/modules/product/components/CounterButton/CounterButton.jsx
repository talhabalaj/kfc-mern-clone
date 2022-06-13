import './CounterButton.scss'

export const CounterButton = ({ onChange, value }) => {
  return (
    <div className="counter-button">
      <button className="button" onClick={() => onChange(value - 1)}>-</button>
      <div>{value}</div>
      <button className="button" onClick={() => onChange(value + 1)}>+</button>
    </div>
  )
}
