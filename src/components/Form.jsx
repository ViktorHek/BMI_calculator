import React, { Component } from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in kg"
        value={props.weight}
        name="weight"
        data-cy="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in kg"
        value={props.height}
        name="height"
        data-cy="height"
        onChange={props.onChangeHandler}
      />
      <button data-cy="calculate">Calculate BMI</button>
    </form>
  );
};

export default Form;
