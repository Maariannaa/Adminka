import '../css/App.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as userActions from '../actions/Actions'
import { bindActionCreators } from 'redux';

class UserInfo extends Component {

    componentDidMount =()=>{
        const { id } = this.props.match.params;
       this.props.actions.selectedUser(id)
        console.log(this.props)
      }

  render() {
    
  console.log(this.props)
  const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Info</h1>
            <Link to='/'>
              <img src='/arrow.png' className="icon"/>
            </Link> 
        </header>
        <div>
           <main id="main">
            <section id="left">
            </section>
             <section id="right" key={user.id} >
              <div id="form" action="#">
                <div id="avatar-foto" key={user.id} >
                  <div id='avatar'>
                  </div>
                  <div id="form-card" className="form-field"> 
                    <div> 
                      <span>Fist Name:</span>
                      <div className='value'> {user.firstName}</div>
                    </div>    
                    <div> 
                      <span> Last Name:</span> 
                      <div className='value'> {user.lastName}</div>
                    </div>  
                    <div>
                      <span>Phone:</span> 
                      <div className='value'> {user.phone}</div></div>
                    <div>
                      <span>City:</span>
                      <div className='value'> {user.city}</div> </div>
                    <div>
                      <span>Address:</span> 
                      <div className='value'> {user.address}</div>
                    </div>  
                    <div>
                      <span>Email:</span> 
                      <div className='value'> {user.email}</div>
                    </div>
                    <div>
                      <span>Status:</span> 
                      <div className='value'>active or inactive</div>
                    </div>
                  </div> 
                </div>
              </div>  
            </section> 
          </main> 
        </div>                                    
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state[ownProps.match.params.id] };
}

function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators({ ...userActions }, dispatch)
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);