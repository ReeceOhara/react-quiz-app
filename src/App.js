import React from 'react';
import './App.css';
import TopicHeader from './components/TopicHeader';
import TopicBody from './components/TopicBody';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {topic: 'None',
                answers: [{'id': 1, 'answer': 'Pre-Algebra'},{'id': 2, 'answer': 'Algebra I'},{'id': 3, 'answer': 'Algebra II'},
                {'id': 4, 'answer': 'Geometry'},{'id': 5, 'answer': 'Trigonometry'},{'id': 6, 'answer': 'Calculus I'}],
                quizStarted: false,
                selected: 'na'
                };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    //Quiz hasnt started yet. User is still picking topic
    if(!this.state.quizStarted){
      this.setState({
        topic: e.target.value,
        answers: [{'id': 1, 'answer': 'red'}, {'id': 2, 'answer': 42}, {'id': 3, 'answer': 'Yes'}],
        quizStarted: true,
        selected: e.target.id
        }, () => {
          console.log(this.state);
      });
      //Quiz has started so only get the key of the selected answer
    } else {
      this.setState({selected: e.target.value}, //Need to change this so it gets key and not value
          () => {
            console.log(this.state);
          });
    }
}

  render() {
    console.log(this.state['topic']);
    
    return (
      <div className="App">
        <TopicHeader subject={this.state['topic']}></TopicHeader>
        <form>
        <TopicBody answers={this.state.answers} showId={this.acceptId} handleChange={this.handleChange}></TopicBody>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
