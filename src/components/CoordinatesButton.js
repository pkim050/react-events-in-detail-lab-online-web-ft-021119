// Code CoordinatesButton Component Here
import React, {Component} from React;

export default class CoordinatesButton extends Component {
  onReceiveCoordinates = (props) => {
    console.log(props)
  }

  array = []
  clickEvent = (event) => {
    this.array.push(event.clientX, event.clientY)
    this.props
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Button</button>
    )
  }
}
