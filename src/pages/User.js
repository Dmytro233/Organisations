import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class User extends React.Component {
  state = {
    followers: [],
    following: []
  };

  openFollowersList = () => {
    const { activeUser } = this.props;
    axios
      .get(activeUser.followers_url)
      .then(res => {
        this.setState({ followers: res.data });
      })
      .catch(err => console.log(err.response.data));
  };

  openFollowingList = () => {
    const { activeUser } = this.props;
    let following = activeUser.following_url;
    let correctFollowing = following.slice(0, -13);
    axios
      .get(correctFollowing)
      .then(res => {
        this.setState({ following: res.data });
      })
      .catch(err => console.log(err.response.data));
  };
  render() {
    const { followers, following } = this.state;
    const { avatar_url, login } = this.props.activeUser;
    return (
      <div className="userPage">
        <figure className="userPicture">
          <p>
            <img src={avatar_url} />
          </p>
          <figcaption>
            <h4>{login}</h4>
          </figcaption>
        </figure>
        <section className="userFollower">
          <div className="userFollowers">
            <div>
              <p>Followers List</p>
              <p>
                <button onClick={this.openFollowersList}>Open</button>
              </p>
            </div>
            <ul>
              {followers.map(el => (
                <li key={el.id}>{el.login}</li>
              ))}
            </ul>
          </div>
          <div className="userFollowing">
            <div>
              <p>Following List</p>
              <p>
                <button onClick={this.openFollowingList}>Open</button>
              </p>
            </div>
            <ul>
              {following.map(el => (
                <li key={el.id}>{el.login}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ activeUser }) => ({ activeUser });

export default connect(mapStateToProps)(User);
