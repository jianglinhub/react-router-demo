import React, { Component } from 'react'
import { Link } from './react-router-dom'

export default class UserList extends Component {
  render() {
    return (<div>
      <Link to="/user/detail/1">detail1</Link><br />
      <Link to="/user/detail/2">detail2</Link><br />
      <Link to="/user/detail/3">detail3</Link><br />
    </div>)
  }
}