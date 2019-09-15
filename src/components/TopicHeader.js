import React from 'react';
var data = require('../tempDB.json');


class TopicHeader extends React.Component {
    render() {
        var message = 'Please Select a Topic';
        for(let i in data.topics){
            var index = Math.floor(Math.random() * data.topics[i].questions.length);
            if(this.props.subject.answer === data.topics[i].name){
                message = data.topics[i].questions[index];
            }
        }
        return (
            <h1>{message}</h1>
        )
    }
}

export default TopicHeader;