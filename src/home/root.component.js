import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

const event = new CustomEvent("myEvent", {
    detail: {
        key: "detail-value",
    },
});
window.dispatchEvent(event);

const AnimationExample = () => (
    <Router basename="/home">
        <Route
            render={({ location }) => (
                <div style={{ position: "relative", height: "100%" }}>
                    <button onClick={() => window.dispatchEvent(event)}>
                        hey
                    </button>
                </div>
            )}
        />
    </Router>
);

export default AnimationExample;
