import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  state = {
    name:"",
    discription:"",
  };
  handleNameChange = (event) =>{
    this.setState({
        name: event.target.values,
    });
    };
    handleDescriptionChange = (event) => {
        this.setState({
            email:event.target.discription,
        });
    };
    handleSubmit = (event) =>{
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
      <h1>My Profile</h1>
      <div>
        <h1>Name</h1>
        <label htmlFor="name"></label>
        <input type ="text" value = {this.state.name} onChange = {this.handleNameChange}/>
      </div>
      <section>
        <h1>Gender</h1>
       <label for="gender"></label>
        <select name="bun" class="bun-type" id="bun">
             <option value="male">male</option>
            <option value="female">female</option>
        </select>
        </section>
      <div>
        <h1>discription</h1>
        <label htmlFor="discription"></label>
        <textarea rows="3" cols="50" name="discription" id="discription"></textarea>
      </div>
      <input type="radio" id="yes"/>
      <label for="yes">I have read the terms of conduct</label>
      <div>
      <button>提交</button>
      </div>
      
      </form>
    );
  }
}

export default MyProfile;


