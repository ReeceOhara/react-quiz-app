import React from 'react';
import TopicChoice from './TopicChoice';

class TopicBody extends React.Component {
    render() {
        let questions = this.props.questions;
        return questions.map((questionName) => (
            <TopicChoice name={questionName} handleChange={this.props.handleChange}/>
        ));
    }
}

export default TopicBody;