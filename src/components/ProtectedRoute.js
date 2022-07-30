import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...props }) => {
    console.log('props.loggeIn', props.loggedIn)

    return (
        <Route>
            {props.loggedIn === true ? <Component {...props} /> : <Redirect to="/signin" />}
        </Route>
    )
}
export default ProtectedRoute;