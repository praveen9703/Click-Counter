// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreamentCount = () => {
    this.setState(prevState => {
      console.log(`the prev val ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">The Button has been clicked {count} times</h1>
        <p className="description">Click the button to increase the count!</p>
        <button
          type="button"
          className="button"
          onClick={this.onIncreamentCount}
        >
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
