import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class FollowersList extends Component {
  goToActiveUser = event => {
    const { dispatch } = this.props;
    const { activeFollowers } = this.props;
    const result = activeFollowers.find(
      el => el.id === parseInt(event.target.id)
    );
    dispatch({ type: "SET_USER", activeUser: result });
  };
  render() {
    const { activeFollowers } = this.props;
    return (
      <div className="follower">
        <p>
          <b>Followers List</b>
        </p>
        <ul>
          {activeFollowers.map(el => (
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

const mapStateToProps = ({ activeFollowers }) => ({ activeFollowers });

export default connect(mapStateToProps)(FollowersList);
