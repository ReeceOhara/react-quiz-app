import React from 'react';

class TopicHeader extends React.Component {
    render() {
        var message = '';
        if(this.props['subject'] === 'None'){
            message = "Select a topic";
        } else if(this.props.subject === 'Pre-Algebra'){
            message = "It Works!";
        } else {
            message = "Question would go here";
        }
        return (
            <h1>{message}</h1>
        )
    }
}

export default TopicHeader;