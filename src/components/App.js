import React, { Component } from 'react';
import '../css/App.scss';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js'

class App extends Component {
  


  render() {
    
    return (

              <div className="App">
        <div className="split l">
          <div className="centered">
            <header className="App-header">
              <h1 className="center " id="header">Adminka</h1>
            </header>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li> 
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/'>About Us</Link></li> 
                <li><Link to='/'>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="split r">
        <div className="particles">
        <Particles     params={{
        "particles": {
            "number": {
                "value": 45
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    }}
    style={{
      width: '100%'
    }}></Particles>
        </div>
        </div>      
      </div>
      
    );
  }

}


export default App;
