import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class FollowingList extends Component {
  goToActiveUser = event => {
    const { dispatch } = this.props;
    const { activeFollowing } = this.props;
    const result = activeFollowing.find(
      el => el.id === parseInt(event.target.id)
    );
    dispatch({ type: "SET_USER", activeUser: result });
  };
  render() {
    const { activeFollowing } = this.props;
    return (
      <div className="follower">
        <p>
          <b>Following List</b>
        </p>
        <ul>
          {activeFollowing.map(el => (
            <li key={el.id}>
              <Link
                onClick={this.goToActiveUser}
                id={el.id}
                to={`/user/${el.id}`}
              >
                {el.login}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ activeFollowing }) => ({ activeFollowing });

export default connect(mapStateToProps)(FollowingList);
