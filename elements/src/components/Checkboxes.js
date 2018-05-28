import React from 'react';
import CheckboxCode from '../Code/Checkbox';

class Checkboxes extends React.Component {
  state = {
    options: [
      {value: 'Item 1',
       checked: false},
      {value: 'Item 2',
       checked: false},
      {value: 'Item 3',
       checked: false}
    ]
  }
  toggleItem = (itemToToggle) => {
    let options = this.state.options.map(option => {
      if (option.value !== itemToToggle.value) return option;
      return {...itemToToggle, checked: !itemToToggle.checked}
    });
    this.setState({ options});
  }
  render() {
    const list = this.state.options.map((option, index) => {
      return (
      <li key={index}><input
                        type="checkbox"
                        value={option.value}
                        checked={option.checked}
                        onChange={() => this.toggleItem(option)} />
        <label>{option.value}</label></li>)
    })
    return (
      <div>
        <ul style={{listStyle: 'none'}}>
          { list }
        </ul>
        <CheckboxCode />
      </div>
    )
  }
}

export default Checkboxes;
