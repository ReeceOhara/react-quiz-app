import React from 'react';
import TopicChoice from './TopicChoice';

class TopicBody extends React.Component {
    render() {
        let answers = this.props.answers;
        return answers.map((item) => (
            <TopicChoice key={item.id} name={item.answer} handleChange={this.props.handleChange}/>
        ));
    }
}

export default TopicBody;