import React from 'react';
import { Switch, Link } from 'react-router-dom'



export const NewComponent = () => {
    return (
        <div>
            <h1>Welcome to new component</h1>
                <Switch>
                    <Link to="/">click to go back</Link>
                </Switch>
        </div>
    );
}