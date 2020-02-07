import React from 'react';

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Close session
        </button>
    );
}
export default LogoutButton;