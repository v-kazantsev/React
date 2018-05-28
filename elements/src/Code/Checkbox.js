import React from 'react';
import '../Prism.css';

const CheckboxCode = () => (
  <div className="prism-code">
    <pre className="line-numbers"><code className="language-JavaScript">
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
    </code></pre>
  </div>
)

export default CheckboxCode;
