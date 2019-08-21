import React, { Component } from 'react'

export default class UserDetail extends Component {
  render() {
    return (
      <div>Detail {this.props.match.params.id}</div>
    )
  }
}