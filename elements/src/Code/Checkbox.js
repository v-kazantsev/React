import React from 'react';
import '../Prism.css';
import 'prismjs';
import { Code } from 'watson-react-components';

const CheckboxCode = () => (
  <div className="prism-code">
    <Code language="javascript" lineNumbers>
      {`class Checkboxes extends React.Component {
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

            <ul style={{listStyle: 'none'}}>
              { list }
            </ul>
          )
        }
      }

      export default Checkboxes;
`}
</Code>
  </div>
)

export default CheckboxCode;
