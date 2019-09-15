import React from 'react';

class TopicChoice extends React.Component {
    render() {
        return (
            <li><input type="radio" onClick={this.props.handleChange} value={this.props.choiceObj.id}></input>{this.props.choiceObj.answer}</li>
        );
    }
}

export default TopicChoice;