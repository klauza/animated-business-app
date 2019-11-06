import React, {Component} from 'react'
import axios from 'axios';
import spinner from '../../media/loader2.gif';
import M from 'materialize-css/dist/js/materialize.min.js'; // modals

// API
let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

class Github extends Component {

  componentDidMount(){
    this.getUser('klauza');
    //console.log(this.props.user);
  }

  state = {
    data: [],
    repos: [],
    search: '',
    loading: false
  }
  
  // Get from external API
  getUser = async (user) => {
    
    this.setState({ loading: true });
    try{
    const res = await axios.get(`https://api.github.com/users/${user}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`); // axios deal with promises

    const repoResponse = await axios.get(`https://api.github.com/users/${user}/repos?per_page=4&sort='created: desc'&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    
    this.setState({ data: res.data, repos: repoResponse.data, loading: false}); // passing data to state
    } catch(err){
      console.log(err);
      this.setState({ loading: false});
      M.toast({html: 'No such user exists!', displayLength: '1500'})
    }
  }



  handleSearch = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    
  }
  handleSubmit = (e) => {
    let user = this.state.search
    if (user === ''){
      user = 'klauza';
    }
    this.getUser(user);   // pass state to function
    
    
    e.preventDefault();
  }

    
  render(){
    const { loading } = this.state;
    const { bio, login, hireable, location,  } = this.state.data;
    const { avatar_url } = this.state.data;
    const { html_url, public_repos, blog } = this.state.data;
    //console.log(this.state.repos);



    
    if (loading) return (
    <div className="spinner">
      <img src={spinner} alt="spinner" style={{ width: '200px', margin: '100px auto auto', display: 'block' }} /> 
    </div>
    );
   
    const eachRepo = this.state.repos;
  
    const repoList = eachRepo.map((repo)=>{
      var repoRegex = repo.pushed_at;
      var lastModified = repoRegex.replace(/T[0-9][0-9]:[0-9][0-9]:[0-9][0-9]Z/i,'');
      
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
   
      <div id="github-page">
     
        <div className="user-container">

          <div className="user-container__image">
            <img className="user-container__image--image" src={avatar_url} alt=""/>
            <button className="user-container__image--desc"><a href={html_url}>Github link</a></button>
          </div>
          <div className="user-container__bio">
            <ul>
              <li>
                <div><span>name: </span> {login}</div>
                <form onSubmit={this.handleSubmit}>
                  
                  <input className="search-user" placeholder="Change name" name="search" onChange={this.handleSearch} type="text"/>
                  <button>Ok</button>
                </form>
              </li>
              <li><span>hireable: </span> {hireable? ('yes'):('no')}</li>
              <li><span>currently living in: </span> {location}</li>
              <li><span>official page: </span><a style={{textDecoration: 'none', color: 'black'}}href={blog}> {blog}</a></li>
              <li><span>number of public projects:</span> {public_repos}</li>
            </ul>
            <div className="user-container__bio--about">{bio}</div>
          </div>

        </div>

        <div className="repo-container">
          <span className="repo-container__title">Last created repos</span>
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
