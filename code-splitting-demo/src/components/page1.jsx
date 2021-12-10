import { PAGE_NAMES } from '../constants'
import logo from '../logo.svg'

const Page1Component = ({ onRouteChange }) => {
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
          This is page 1.
        </p>
      </header>

      <button onClick={() => onRouteChange(PAGE_NAMES.PAGE2)}>Page 2</button>
      <button onClick={() => onRouteChange(PAGE_NAMES.PAGE3)}>Page 3</button>
    </div>
  )
}

export default Page1Component
