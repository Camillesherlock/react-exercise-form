import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  render() {
    return (
      <form>
      <h1>My Profile</h1>
      <div>
        <h1>Name</h1>
        <label htmlFor="name"></label>
        <input type ="text"/>
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
        <input type ="text"/>
      </div>

      </form>
    );
  }
}

export default MyProfile;


