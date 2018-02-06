import * as React from "react";


export default class TextBox extends React.Component {

  render() {
    return (
      <div>
        <input type="text" value={this.props.color} onChnage={(e)=>this.props.colorChange(e.target.value)}/>
      </div>
    );
  }
}
