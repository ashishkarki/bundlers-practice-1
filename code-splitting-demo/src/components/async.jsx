import React from 'react'

export default function AsyncComponent(importComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null,
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({
        component: component,
      })
    }

    render() {
      const ComponentToRender = this.state.component
      return ComponentToRender ? <ComponentToRender {...this.props} /> : null
    }
  }
}
