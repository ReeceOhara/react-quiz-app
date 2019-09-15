import React from 'react';
import TopicChoice from './TopicChoice';

class TopicBody extends React.Component {
    render() {
        let choices = this.props.choices;
        return (
            choices.map((item) => (
            <TopicChoice choiceObj={item} handleChange={this.props.handleChange}/>
        ))
        );
    }
}

export default TopicBody;