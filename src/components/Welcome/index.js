// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  textChange = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      this.setState(() => ({status: 'Subscribed'}))
    } else {
      this.setState(() => ({status: 'Subscribe'}))
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="head">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button onClick={this.textChange} type="button" className="button">
            {status}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
