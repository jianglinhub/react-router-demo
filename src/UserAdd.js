import React, { Component } from 'react'

export default class UserAdd extends Component {
  constructor() {
    super()
    this.text = React.createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/user/list')
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <input type="text" ref={this.text} />
      <button type="submit">submit</button>
    </form>)
  }
}