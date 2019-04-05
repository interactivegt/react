import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Button(props) {
  let className="button ";
  if(props.class)
    className += props.class;

  return (
    //<td>{props.name}</td>
    //<td className="button">{props.name}</td>
    <td className={className}>{props.name}</td>
  );
}

function Keyboard(props) {
  // return (
  //   <div className="keyboard">
  //     <h1>Keyboard</h1>
  //   </div>
  // );
  return (
    <table className="keyboard">
      <tr>
        <Button name="CE" class="op" />
        <Button name="C" class="op" />
        <Button name="<-" class="op" />
        <Button name="÷"  class="op"/>
      </tr>
      <tr>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="×" class="op" />
      </tr>
      <tr>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" class="op" />
      </tr>
      <tr>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+"  class="op"/>
      </tr>
      <tr>
        <Button name="±" />
        <Button name="0" />
        <Button name="." />
        <Button name="=" class="eq"/>
      </tr>
    </table>
  );
}

function Display(props) {
  return (
    <div className="display">
      {props.input}
    </div>
  );
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Display input="2×2"/>
        <Keyboard />      
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById("root")
);
