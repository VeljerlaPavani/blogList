import {Component} from 'react'

import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="image"
          alt="profile"
        />
        <h1 className="head">Wade Warren</h1>
        <p className="para">Software Developer at UK</p>
      </div>
    )
  }
}
export default UserInfo
