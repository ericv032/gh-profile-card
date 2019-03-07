import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
      super(props);
          this.state = {
            id: '',
            // Github username
            username: 'ericv032',
          }
        }
        fetchProfile(username) { 
          //https://api.github.com/
          const API = 'https://api.github.com/users';
          let url = `${API}/${username}`;
          fetch(url)
            .then((res) => res.json() )
            .then((data) => {
              this.setState({
                id: '',
                name: data.name,
                avatar: data.avatar_url,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                homeUrl: data.html_url,
                notFound: data.message
              })
            })
            .catch((error) => console.log('Something went wrong') )
        }
        componentDidMount() {
          this.fetchProfile(this.state.username);
        }
        
        render() {
          
          return(
        
          <div>
                 <Profile data={this.state} />
            </div>
          );
        }
      }
      
        
      class Profile extends React.Component {
        render() {
          let data = this.props.data;
          let followers = `${data.homeUrl}/followers`;
          let repositories = `${data.homeUrl}?tab=repositories`;
          let following = `${data.homeUrl}/following`;
           if (data.notFound === 'Not Found')
            return (
               <div className="not-found">
                  <h1>Hmmm!! Username not found. Please try again!!</h1>
               </div>
            );
            return (
              <section className="card">
                <div>
                  <figure>
                <a href={data.homeUrl} target="blank" title={data.name || data.username}><img src={data.avatar} alt={data.username}/></a>
                  </figure>
                  <div className="profile-name">
                  <h1><a href={data.homeUrl} target="blank" title={data.username}>{data.name || data.username}</a></h1>
                  </div>
                </div> 
                <div className="profile-info">
                  <ul>
                     <li>
                        <a href={followers} target="blank"><i>{data.followers}</i><span>Followers</span></a>
                     </li>
                     <li>
                        <a href={repositories} target="blank"><i>{data.repos}</i><span>Repositories</span></a>
                     </li>
                     <li>
                        <a href={following} target="new"><i>{data.following}</i><span>Following</span></a>
                     </li>
                  </ul>
                </div>
                <footer>
                <p>This project was developed using <a href="https://reactjs.org/">React</a>. See the code on <a href="https://github.com/ericv032/" target="new">Github.</a></p></footer>       
              </section>
             
            );
        }
      }

export default Card;
