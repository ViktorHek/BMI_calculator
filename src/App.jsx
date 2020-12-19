import React, { Component } from "react";
import Form from "./components/Form";
import { calculateBMI } from "./helpers/bmiHelper";
import Form from "./components/Message";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
  };

  onChangeHandler = (e) => {
    this.state({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBMI(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return;
    <div>
      <Form
        weight={this.state.weight}
        height={this.state.height}
        onChangeHandler={this.onChangeHandler}
        onSubmitHandler={this.onSubmitHandler}
      />
      {this.state.bmiValue && (
        <Message
          bmiValue={this.state.bmiValue}
          bmiMessage={this.state.bmiMessage}
        />
      )}
    </div>;
  }
}

export default App;
