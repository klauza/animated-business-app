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
    repos: [],
    loading: false
  }
  
  // Get from external API
  getUser = async () => {

    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/klauza?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`); // axios deal with promises

    const repoResponse = await axios.get(`https://api.github.com/users/klauza/repos?per_page=4&sort='created: desc'&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ data: res.data, repos: repoResponse.data, loading: false}); // passing data to state
  }

 


    
  render(){
    const { loading } = this.state;
    const { bio, login, hireable, location,  } = this.state.data;
    const { avatar_url } = this.state.data;
    const { html_url, public_repos, blog } = this.state.data;
    console.log(this.state.repos);

    
    
    if (loading) return (<img src={spinner} style={{ width: '200px', margin: '100px auto auto', display: 'block' }} /> );
   
    const eachRepo = this.state.repos;
  
    const repoList = eachRepo.map((repo)=>{
      var repoRegex = repo.pushed_at;
      var lastModified = repoRegex.replace(/T[0-9][0-9]\:[0-9][0-9]\:[0-9][0-9]Z/i,'');
      
      return(
          <div className="repo" key={repo.id}>
            <ul className="repo-ul">
              <li className="repo-item">{repo.language}</li>
              <li className="repo-item">{repo.name}</li>
              <li className="repo-item">{repo.description}</li>
              <li className="repo-item">{lastModified}</li>
            </ul>
          </div>
      )
    });

    
    return (
   
      <div className="container" id="github-page">
        <div className="user-container">

          <div className="user-container__image">
            <img className="user-container__image--image" src={avatar_url} alt="image"/>
            <button className="user-container__image--desc"><a href={html_url} target="_blank">Github link</a></button>
          </div>
          <div className="user-container__bio">
            <ul>
              <li><span>name: </span> {login}</li>
              <li><span>hireable: </span> {hireable? ('yes'):('no')}</li>
              <li><span>currently living in: </span> {location}</li>
              <li><span>official page: </span><a style={{textDecoration: 'none', color: 'black'}}href={blog}> {blog}</a></li>
              <li><span>number of public projects:</span> {public_repos}</li>
            </ul>
            <div className="user-container__bio--about">{bio}</div>
          </div>

        </div>

        <div className="repo-container">
          <span className="repo-container__title">Latest created repos</span>
          <div className="repo-headers">
            <li className="repo-item-header">Language</li>
            <li className="repo-item-header">Name</li>
            <li className="repo-item-header">Description</li>
            <li className="repo-item-header">Last modified</li>
          </div>
          <div className="repo-list">
            {repoList}
          </div>
        </div>

      



      </div>
    )

    }
  }
export default Github
