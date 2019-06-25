import React, {Component} from 'react'
import axios from 'axios';
import spinner from './loader/load.gif';

class Github extends Component {

  componentDidMount(){
   
    this.getUser();
    //console.log(this.props.user);
  }

  state = {
    data: [],
    loading: false
  }
  
  // Get from external API
  getUser = async () => {

    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/klauza?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); // axios deal with promises

    this.setState({ data: res.data, loading: false}); // passing data to state
  }

  handleClick = () => {
    this.setState({loading: true});
  }

    
  render(){
    const { loading } = this.state;
    const { login } = this.state.data;

    console.log(this.state);

    if (loading) return (<img src={spinner} style={{ width: '200px', margin: '100px auto auto', display: 'block' }} /> )
    
    return (
      <div className="container">
        <p>name {login}</p>
        <button onClick={this.handleClick}>Let's break this page</button>
      </div>
    )

    }
  }
export default Github
