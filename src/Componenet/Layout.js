import * as React from "react";
import TextBox from "./TextBox";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state={color:"red"};
    this.colorChange=this.colorChange.bind(this);
  }
  
  colorChange(color){
    alert("hi");
    this.setState({color:color});
  }

  render() {

    let colorClass={background:"red"};
    
    return (
      <div style={{backgroundColor: colorClass.background}}>
        <TextBox color={this.state.color} colorChange={this.colorChange}/>
      </div>
    );
  }
}
