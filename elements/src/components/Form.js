import React from 'react';
import FormCode from '../Code/Form';

class Form extends React.Component {
  state = {
    isMatch: true,
    firstString: '',
    secondString: '',
    items: []
  }
  handleFirstString = (event) => {
    this.setState({ firstString: event.target.value})
  }
  handleSecondString = (event) => {
    this.setState({ secondString: event.target.value})
    this.setState({ isMatch: this.state.firstString.startsWith(event.target.value)})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.firstString !== '') {
    this.setState({ items: [...this.state.items, this.state.firstString]});
    this.setState({ firstString: ''});
    this.setState({ secondString: ''});
    this.setState({ isMatch: true});
    } else { alert('Nothing to ouput!')};
  }
  render () {
    let list = this.state.items.map((item, index) => <li key={index}>{item}</li>);
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <label>Enter a string: </label>
            <input
              className="input"
              type="text"
              name="firstString"
              value={this.state.firstString}
              onChange={this.handleFirstString} />
          </div>
          <br />
          <div>
            <label>Re-enter the string: </label>
            <input
              className="input"
              type="text"
              name="secondString"
              value={this.state.secondString}
              onChange={this.handleSecondString} />
          </div>
          <br/>
          <div>
            <button className="button">Submit</button>
            <span className="warning">{ !this.state.isMatch && 'Strings don\'t match!'}</span>
          </div>
        </form>
        <div>
          <ol className="list">
            { list }
          </ol>
        </div>
        <FormCode />
      </div>
    )
  }
}

export default Form;
