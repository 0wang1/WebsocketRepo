import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.input);
  }
  render() {
    return (
      <div>
        <input id="inputID" onChange={this.onInputChange} value={this.state.input} type="text" placeholder="new note title" />
        <input onClick={this.handleSubmit} type="submit" />
      </div>
    );
  }
}

export default InputBar;
