import React from 'react';
import '../TopicBody.css';

class TopicBody extends React.Component {
    componentDidUpdate() {
        this.render();
    }

    render() {
        let choices = this.props.choices;
        let selected = this.props.selectedChoice;
        let question = this.props.question;

        return (
            <div className="question-body">
                <h1>{selected !== 'na' ? question : 'Select a topic'}</h1>
                <ul>
                    {choices.map((item) => (
                        <li key={item.id}>
                            <input type='radio' 
                            className={selected === item.answer ? 'isSelected' : ''} 
                            onChange={this.props.onChange}
                            checked={item.answer === this.props.selectedChoice ? true : false}/>
                            <label>{item.answer}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TopicBody;