import React, { Component } from "react";
import Members from "./../components/Members";
import { connect } from "react-redux";
import axios from "axios";

class Organisation extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    let membersUrl = this.props.activeOrg.members_url;
    let correctMembersUrl = membersUrl.slice(0, -9);
    axios
      .get(correctMembersUrl)
      .then(res => this.setState({ members: res.data }))
      .catch(err => console.log(err.response.data));
  }

  goToActiveUser = event => {
    const { dispatch } = this.props;
    const { members } = this.state;
    const result = members.find(el => el.id === parseInt(event.target.id));
    dispatch({ type: "SET_USER", activeUser: result });
  };

  goToFollowersList = event => {
    const { dispatch } = this.props;
    const { members } = this.state;
    const result = members.find(el => el.id === parseInt(event.target.id));
    let followers = result.followers_url;
    axios
      .get(followers)
      .then(res => {
        dispatch({ type: "SET_FOLLOWERS", activeFollowers: res.data });
      })
      .catch(err => console.log(err.response.data));
  };

  goToFollowingList = event => {
    const { dispatch } = this.props;
    const { members } = this.state;
    const result = members.find(el => el.id === parseInt(event.target.id));
    let followers = result.following_url;
    let correctFollowers = followers.slice(0, -13);
    axios
      .get(correctFollowers)
      .then(res => {
        dispatch({ type: "SET_FOLLOWING", activeFollowing: res.data });
      })
      .catch(err => console.log(err.response.data));
  };

  render() {
    const { members } = this.state;
    return (
      <div className="organisationPage">
        <section className="organisationSection">
          <h2>{this.props.activeOrg.login}</h2>
          <img src={this.props.activeOrg.avatar_url} />
          <p>
            <b>Description:</b>
            <br />
            {this.props.activeOrg.description}
          </p>
        </section>
        <section className="membersSection">
          <ul>
            <Members
              details={members}
              goToActiveUser={this.goToActiveUser}
              goToFollowersList={this.goToFollowersList}
              goToFollowingList={this.goToFollowingList}
            />
          </ul>
        </section>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//     return { activeOrg: state.activeOrg }
// }

const mapStateToProps = ({ activeOrg }) => ({ activeOrg });

export default connect(mapStateToProps)(Organisation);
