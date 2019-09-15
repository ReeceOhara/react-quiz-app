import React from 'react';

class TopicChoice extends React.Component {
    render() {
        return (
            <li><input type="radio" onClick={this.props.handleChange} value={this.props.name}></input>{this.props.name}</li>
        );
    }
}

export default TopicChoice;