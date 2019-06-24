import React, { Component } from 'react'

class User extends Component {
  componentDidMount(){
    this.props.getUser();
    //console.log(this.props.user);
  }

  render(){
    console.log(this.props.user);
    
    const { loading } = this.props;
    //console.log(user);
    const { login } = this.props.user;

    //   name,
    //   avatar_url,
    //   location,
    //   bio,
    //   blog,
    //   login,
    //   html_url,
    //   company,
    //   followers,
    //   following,
    //   public_repos,
    //   public_gists,
    //   hireable

    
    if (loading) return <div> Fetching... </div>;

    return (
      <div className="container">
        <p>name: user {login}</p>
        
      </div>
    )
  }
}
export default User
