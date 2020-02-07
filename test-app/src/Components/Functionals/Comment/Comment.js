import React from 'react';
import UserInfo from '../UserInfo/UserInfo';

const Comment = (props) => {

    function formatDate(date) {
        console.log(date);
    }

    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;
