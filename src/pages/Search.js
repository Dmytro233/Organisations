import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Search extends Component {
  state = {
    value: "",
    searchResults: []
  };

  componentDidMount() {
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

  render() {
    const { value, searchResults } = this.state;

    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={value} onChange={this.onChange} />
          <button>Search</button>
        </form>
        <ul>
          {searchResults.map(el => (
            <li key={el.id}>
              <Link to={`/organisation/${el.id}`}>{el.login}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = ({ orgList }) => ({ orgList });

export default connect(mapStateToProps)(Search);
