import React from 'react';
import '../Prism.css';

const DropdownCode = () => (
  <div className="prism-code">
    <pre className="line-numbers"><code className="language-JavaScript">
      {`import React from 'react'

      class Drop extends React.Component {
        state = {
          value: "0",
          options: [
            'Please select an item',
            'React.js',
            'Node.js',
            'Vue.js',
            'Angular'
          ]
        }
        handleSelect = (event) => {
          this.setState({ value: event.target.value })
        }
        render() {
          const options = this.state.options.map((item, index) => {
      			return <option key={index} value={index}>{item}</option>;
      		});
          const value = this.state.value;
          return (
            <div>
              <p>{value === '0' ? 'Nothing selected yet'
                 : this.state.options[value] + ' was selected'}</p>
              <select
                value={this.state.value}
                onChange={this.handleSelect}>
                { options }
              </select>
            </div>
          )
        }
      }

      export default Drop;
`}
    </code></pre>
  </div>
)

export default DropdownCode;
