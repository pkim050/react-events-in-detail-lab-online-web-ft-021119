// Code DelayedButton Component Here
import React, {Component} from React;

export default class DelayedButton extends Component {

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Button</button>
      </div>
    )
  }
}
