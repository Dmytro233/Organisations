import React from "react";
import { connect } from "react-redux";

function Organisation(props) {
  return <p>{JSON.stringify(props.activeOrg)}</p>;
}

// const mapStateToProps = (state) => {
//     return { activeOrg: state.activeOrg }
// }

const mapStateToProps = ({ activeOrg }) => ({ activeOrg });

export default connect(mapStateToProps)(Organisation);
