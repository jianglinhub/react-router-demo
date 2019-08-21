import React, { Component } from 'react'
import { Consumer } from './context'
import pathToRegExp from 'path-to-regexp'

export default class HashRouter extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          let { path, component: Component, exact = false } = this.props
          let pathname = state.location.pathname
          let keys = []
          let reg = pathToRegExp(path, keys, { end: exact })
          keys = keys.map(item => item.name) // [id, name]
          let result = pathname.match(reg)
          let [url, ...values] = result || [] // [1, 2]
          let props = {
            location: state.location,
            history: state.history,
            match: {
              params: keys.reduce((obj, current, index) => {
                obj[current] = values[index]
                return obj
              }, {})
            }
          }
          if (result) {
            return <Component {...props} />
          }
          return null
        }}
      </Consumer>
    )
  }
}