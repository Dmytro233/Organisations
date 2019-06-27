import React from "react";
import { connect } from "react-redux";

const User = props => <p>{JSON.stringify(props.activeUser)}</p>;

const mapStateToProps = ({ activeUser }) => ({ activeUser });

export default connect(mapStateToProps)(User);
