import React, { Component } from 'react'
import { Provider } from './context'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }

  componentDidMount() {
    // 默认hash跳转到 /
    window.location.hash = window.location.hash || '/'
    // 监听hash变化，重新设置状态
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }

  render() {
    let value = {
      location: this.state.location,
      history: {
        push(to) {
          window.location.hash = to
        }
      }
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider> 
    )
  }
}