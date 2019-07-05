import React from "react";
import { Link } from "react-router-dom";

function Members(props) {
  return (
    <>
      {props.details.map(el => (
        <li key={el.id}>
          <figure>
            <p>
              <img src={el.avatar_url} width="200" height="200" />
            </p>
            <figcaption>
              <h4>
                <Link
                  onClick={props.goToActiveUser}
                  id={el.id}
                  to={`/user/${el.id}`}
                >
                  {el.login}
                </Link>
              </h4>
            </figcaption>
          </figure>

          <div>
            <Link
              onClick={props.goToFollowersList}
              id={el.id}
              to={`/followers/${el.id}`}
            >
              Followers List
            </Link>
          </div>
          <div>
            <Link
              onClick={props.goToFollowingList}
              id={el.id}
              to={`/following/${el.id}`}
            >
              Following List
            </Link>
          </div>
        </li>
      ))}
    </>
  );
}

export default Members;
