import './App.css'
import Page1Component from './components/page1'
import { useState } from 'react'
import { PAGE_NAMES } from './constants'

function App() {
  const [appState, setAppState] = useState({
    route: PAGE_NAMES.PAGE1,
    component: '',
  })

  const onRouteChange = (route) => {
    // without no code splitting
    // setAppState({
    //   route: route,
    // })

    // with code splitting
    if (route === PAGE_NAMES.PAGE1) {
      setAppState({
        route: route,
        component: Page1Component,
      })
    } else if (route === PAGE_NAMES.PAGE2) {
      import('./components/page2').then((Page2Component) => {
        setAppState({
          route: route,
          component: Page2Component.default,
        })
      })
    } else if (route === PAGE_NAMES.PAGE3) {
      import('./components/page3').then((Page3Component) => {
        setAppState({
          route: route,
          component: Page3Component.default,
        })
      })
    }
  }

  if (appState.route === PAGE_NAMES.PAGE1) {
    // load the default page normally
    return <Page1Component onRouteChange={onRouteChange} />
  } else {
    // others have this quirky syntax
    return <appState.component onRouteChange={onRouteChange} />
  }
  // else if (appState.route === PAGE_NAMES.PAGE2) {
  //   return <Page2Component onRouteChange={onRouteChange} />
  // } else {
  //   return <Page3Component onRouteChange={onRouteChange} />
  // }
}

export default App
