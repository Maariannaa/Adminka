import '../css/App.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as userActions from '../actions/Actions'
import { bindActionCreators } from 'redux';

console.log(userActions);

class EditComponent extends Component {
   
  handleChange = (e) => {
    
  }

  handleEdit = (e) => {
    //e.preventDefault();
    // const newName = this.getName.value;
    // const newLastName = this.getLastName.value;
    // const newEmail = this.getEmail.value;
    // const newPhone = this.getPhone.value;
    // const newCity = this.getCity.value;
    // const newAddress = this.getAddress.value;
    // const data = {
    //   newName,
    //   newLastName,
    //   newEmail,
    //   newPhone,
    //   newCity,
    //   newAddress
    // }
    // const {updateUser} = this.props.actions;
    // const { id } = this.props.match.params;
    // updateUser(id, {data: data} )
  }

  componentDidMount =()=>{
    // const { id } = this.props.match.params;
    // this.props.actions.editUser(id); 
    
    console.log(this.props)
  }


  render() {
    const {setFirstName} = this.props.actions;
  console.log(this.props)
  const { user, firstName } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edit</h1>
            <Link to='/users'>
              <img src='/arrow.png' className="icon"/>
            </Link> 
        </header>
        <div>
          <main id="main">
            <section id="foto">
            </section>
            <section id="right" key={user.id}>
              <div key={user.id} id="avatar-foto">
                <form action='#' onSubmit={this.handleEdit}>
                  <button id='avatar-2'>
                    #your photo
                  </button>  
                  <input required type="text" 
                    ref={(input) => this.getName = input}
                    defaultValue={user.firstName} 
                    placeholder="Enter Your Name" />   
                  <input required type="text" 
                    ref={(input) => this.getLastName = input}
                    defaultValue={user.lastName} 
                    placeholder="Enter Your Last Name" />
                  <input required type="text" 
                    ref={(input) => this.getEmail = input}
                    defaultValue={user.email} 
                    placeholder="Enter Your Email" />
                  <input required type="text" 
                    ref={(input) => this.getPhone = input}
                    defaultValue={user.phone} 
                    placeholder="Enter Your Last Phone" />
                  <input required type="text" 
                    ref={(input) => this.getCity = input}
                    defaultValue={user.city} 
                    placeholder="Enter Your City" />
                  <input required type="text" 
                    ref={(input) => this.getAddress = input}
                    defaultValue={user.address} 
                    placeholder="Enter Your Address" />
                  <Link to='/users'>
                    <button type="submit" >Update</button>
                  </Link> 
                  </form>
                </div>
            </section> 
          </main> 
        </div>    
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { 
    user: state[ownProps.match.params.id],
    firstName: state, 
  userReducer: state.userReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...userActions }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
//export default EditComponent;