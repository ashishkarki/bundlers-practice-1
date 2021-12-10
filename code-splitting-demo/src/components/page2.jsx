import { PAGE_NAMES } from '../constants'
import logo from '../logo.svg'

const Page2Component = ({ onRouteChange }) => {
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
          This is page 2.
        </p>
      </header>

      <button onClick={() => onRouteChange(PAGE_NAMES.PAGE1)}>Page 1</button>
      <button onClick={() => onRouteChange(PAGE_NAMES.PAGE3)}>Page 3</button>
    </div>
  )
}

export default Page2Component
