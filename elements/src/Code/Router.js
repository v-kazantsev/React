import React from 'react';
import '../Prism.css';

const RouterCode = () => (
  <div className="prism-code">
    <pre className="line-numbers"><code className="language-JavaScript">
      {`class App extends Component {
        render() {
          return (
            <BrowserRouter>
              <div className="App">
                <header>
                  <nav className="Navbar">
                    <Navbar />
                  </nav>
                </header>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path="/forms" component={ Form } />
                  <Route path="/radiobuttons" component={ Radio } />
                  <Route path="/dropdowns" component={ Drop } />
                  <Route path="/checkboxes" component={ Checkboxes } />
                </Switch>
              </div>
          </BrowserRouter>
          );
        }
      }

      export default App;`}
    </code></pre>
  </div>
)
export default RouterCode;
