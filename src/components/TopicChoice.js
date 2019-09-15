import React from 'react';

class TopicChoice extends React.Component {
    render() {
        return (
            <li><input type="radio" onClick={this.props.handleChange} value={this.props.answerObj.id}></input>{this.props.answerObj.answer}</li>
        );
    }
}

export default TopicChoice;