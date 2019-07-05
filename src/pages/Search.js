import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Search extends Component {
  state = {
    value: "",
    searchResults: []
  };

  componentWillMount() {
    const { dispatch } = this.props;
    axios
      .get("https://api.github.com/organizations")
      .then(res => dispatch({ type: "SET_LIST", orgList: res.data }))
      .catch(err => console.log(err.response.data));
  }

  onChange = event => this.setState({ value: event.target.value });

  onSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    const { orgList } = this.props;
    const result = orgList.filter(({ login }) =>
      login.toLowerCase().match(value.toLowerCase())
    );
    this.setState({ searchResults: result });
  };

  goToActiveOrg = event => {
    const { dispatch } = this.props;
    const { searchResults } = this.state;
    const result = searchResults.find(
      el => el.id === parseInt(event.target.id)
    );
    dispatch({ type: "SET_ORG", activeOrg: result });
  };

  render() {
    const { value, searchResults } = this.state;
    return (
      <>
        <form id="searchField" onSubmit={this.onSubmit}>
          <h1>Organisations</h1>
          <input type="text" value={value} onChange={this.onChange} />
          <p>
            <button>Search</button>
          </p>
        </form>
        <div className="listOfOrganisation">
          <p>List Of Organisations</p>
          <ul>
            {searchResults.map(el => (
              <li onClick={this.goToActiveOrg} key={el.id}>
                <Link id={el.id} to={`/organisation/${el.id}`}>
                  {el.login}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ orgList }) => ({ orgList });

export default connect(mapStateToProps)(Search);
