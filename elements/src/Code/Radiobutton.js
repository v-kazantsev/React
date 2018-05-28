import React from 'react';
import '../Prism.css';

const RadiobuttonCode = () => (
  <div className="prism-code">
    <pre className="line-numbers"><code className="language-JavaScript">
      {`class Radio extends React.Component {
        state = {
          option: 'option1'
        }
        handleChange = (event) => {
          this.setState({ option: event.target.value })
        }
        render() {
          return (
            <ul style={{listStyle: 'none'}}>
              <li>
                <input type="radio"
                       value="option1"
                       onChange={this.handleChange}
                       checked={this.state.option === 'option1'}
                       />
                <label>Option 1</label>
              </li>
              <li>
                <input type="radio"
                       value="option2"
                       onChange={this.handleChange}
                       checked={this.state.option === 'option2'}
                       />
                <label>Option 2</label>
              </li>
              <li>
                <input type="radio"
                       value="option3"
                       onChange={this.handleChange}
                       checked={this.state.option === 'option3'}
                       />
                <label>Option 3</label>
              </li>
              <li>
                <input type="radio"
                       value="option4"
                       onChange={this.handleChange}
                       checked={this.state.option === 'option4'}
                       />
                <label>Option 4</label>
              </li>
              <li>
                <input type="radio"
                       value="option5"
                       onChange={this.handleChange}
                       checked={this.state.option === 'option5'}
                      />
                <label>Option 5</label>
              </li>
            </ul>
          )
        }
      }

      export default Radio;`}
    </code></pre>
  </div>
)

export default RadiobuttonCode;
