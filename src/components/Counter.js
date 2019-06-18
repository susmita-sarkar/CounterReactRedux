import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increase, decrease, decreaseBy2 } from "../actions/ChangeAction";
import { connect } from "react-redux";

class Counter extends Component {
  increase = () => {
    this.props.increase();
  };

  decrease = () => {
    this.props.decrease();
  };

  decrease2 = () => {
    this.props.decreaseBy2();
  };

  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <p>{this.props.counter}</p>
        <button onClick={this.decrease}>-</button>

        <p>{this.props.counter2}</p>
        <button onClick={this.decrease2}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.val,
    counter2: state.val2
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increase,
      decrease,
      decreaseBy2
    },
    dispatch
  );

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

const newComponent = hoc(Counter);

export default newComponent;

//export default Counter;
