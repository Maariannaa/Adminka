import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as userActions from '../actions/Actions'
import { bindActionCreators } from 'redux';
import '../css/App.scss';

console.log(userActions);

class User extends Component {
  constructor(props){
    super(props);
    this.state ={
      isActive: true
    }
 // const {dispatch} = props;
  }

  onActive=()=>{
    this.setState({
      isActive: !this.state.isActive
    })
  }

  componentDidMount = () =>{
    this.props.actions.editUser({ id: this.props.user.id })
   this.props.actions.selectedUser({ id: this.props.user.id })
   // console.log(this.props)
  }

  render() {
    const {editUser, selectedUser} = this.props.actions;
    const {user, firstName} = this.props;
   // console.log(user.id)
      return (
        <main>
          <div className="flex-container" >
            <NavLink to={`/users/${user.id}`} onClick={() => selectedUser({ id: this.props.user.id })}>
            <div className="flex-container" >
              <div className='flex-div'>  
                <span>First name: </span> 
                <div  className='value'> 
                  {user.firstName}
                </div>
              </div>
              <div className='flex-div'>
                <span>Last name:</span>
                <div className='value'> 
                  {user.lastName}
                </div>
              </div>  
              <div className='flex-div'>
                <span>Phone:</span> 
                <div className='value'> 
                  {user.phone}
                </div>
              </div>
              <div className='flex-div'>
                <span>City:</span>
                <div className='value'> 
                  {user.city}
                </div>
              </div>
              <div className='flex-div'>
                <span>Address:</span> 
                <div className='value'> 
                  {user.address}
                </div>
              </div>  
              <div className='flex-div'>
                <span>Email:</span> 
                <div className='value'> 
                  {user.email}
                </div>
              </div>
              <div className='flex-div'>
                <span>Status:</span> 
                <div className='value'> 
                  { this.state.isActive ? 'Active': <div style={{ color: 'black'}}>Inactive</div>}
                </div>
              </div>
            </div>
            </NavLink>
            <div className="flex-container">
              <div id="btn">
                <NavLink to={`/user-edit/${user.id}`}> 
                  <button type="submit" onClick={() => editUser({ id: this.props.user.id })}>
                    Edit
                  </button>
                </NavLink>
                <button type="submit" onClick={this.onActive} >Delete</button>
              </div>
            </div>  
          </div> 
        </main> 
      );
  }
}

function mapStateToProps(state) {
  return { users: state,
     };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...userActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
