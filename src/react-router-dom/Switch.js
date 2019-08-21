import React, { Component } from 'react'
import { Consumer } from './context'
import pathToRegExp from 'path-to-regexp'

export default class Switch extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          let pathname = state.location.pathname
          let children = this.props.children
          for (let i=0; i<children.length; i++) {
            let child = children[i]
            let path = child.props.path || '' // Redirect组件没有path
            let reg = pathToRegExp(path, [], { end: false })
            // switch 匹配成功
            if (reg.test(pathname)) {
              return child // 把匹配到的组件返回
            }
          }
          return null
        }}
      </Consumer>
    )
  }
}