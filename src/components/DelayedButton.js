// Code DelayedButton Component Here
import React, {Component} from React;

export default class DelayedButton extends Component {
  clickEvent = (event) => {
    event.persist()
    setTimeout(
      function() {
        this.props.onDelayedClick(event)
      }
      this.props.delay
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Button</button>
      </div>
    )
  }
}
