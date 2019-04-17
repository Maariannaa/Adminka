import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import User from './User';
import EditComponent from './EditComponent';

class AllUsers extends Component {
  render() {
    return (
      <div  className="App">
        <header className="App-header">
          <h1 className="App-title">All Users 
            <Link to='/'>
              <img src='/home.png' id="icon-home"/>
            </Link></h1>  
        </header>
        <main >
          {this.props.users.map((user) => (
            <div  key={user.id}>
              { 
                user.editing ? 
                <EditComponent user={user} key={user.id} /> :  
                <User user={user} key={user.id} />
              }
            </div>
            ))}
        </main>  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   users: state
  }
}
export default connect(mapStateToProps)(AllUsers);