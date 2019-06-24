import React, {Component} from 'react'
import User from './user/User';
import axios from 'axios';

class Github extends Component {

  state = {
    data: [],
    loading: false
  }
  
  // Get from external API
getUser = async () => {
  // fetch(`https://api.github.com/users/klauza?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log('tutaj tez jest data: ', data)
      
  //   })
  this.setState({ loading: true });
  const res = await axios.get(`https://api.github.com/users/klauza?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); // axios deal with promises
  
    // .catch(err => console.log(err));
  this.setState({ data: res.data, loading: false}); // passing data to state
}

    
  render(){
      return (
        <div>
            <User getUser={this.getUser} user={this.state.data} loading={this.state.loading}/>
        </div>
      )
    }
  }
export default Github
