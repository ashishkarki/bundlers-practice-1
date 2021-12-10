import { PAGE_NAMES } from '../constants'
import logo from '../logo.svg'

const Page3Component = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          style={{
            textTransform: 'uppercase',
            fontSize: '1.5em',
            color: 'brown',
          }}
        >
          This is page 3.
        </p>
      </header>

      <button onClick={() => onRouteChange(PAGE_NAMES.PAGE1)}>Page 1</button>
      <button onClick={() => onRouteChange(PAGE_NAMES.PAGE2)}>Page 2</button>
    </div>
  )
}

export default Page3Component
