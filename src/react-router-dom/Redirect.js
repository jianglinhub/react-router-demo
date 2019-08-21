import React, { Component } from 'react'
import { Consumer } from './context'

export default class Redirect extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          // 重定向就是匹配不到直接跳转到redirect的to路径
          state.history.push(this.props.to)
          return null
        }}
      </Consumer>
    )
  }
}