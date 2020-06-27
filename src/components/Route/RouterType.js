import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import { getUser } from "../../AuthUser";

export const AuthLayoutRoute = ({ toRender: ToRender, ...rest }) => {
  const user = getUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuth ? (
          <React.Fragment>
            <Layout>
              <ToRender params={props.match.params} />
            </Layout>
          </React.Fragment>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export const AuthRoute = ({ toRender: ToRender, ...rest }) => {
  const user = getUser();
  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuth ? (
          <ToRender params={props.match.params} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export const NoAuthRoute = ({ toRender: ToRender, ...rest }) => {
  const user = getUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user.isAuth ? (
          <ToRender params={props.match.params} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
