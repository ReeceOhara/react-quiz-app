import React from 'react';
import './App.css';
import TopicHeader from './components/TopicHeader';
import TopicBody from './components/TopicBody';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {topic: 'None',
                choices: [{'id': 0, 'answer': 'Pre-Algebra'},{'id': 1, 'answer': 'Algebra I'},{'id': 2, 'answer': 'Algebra II'},
                {'id': 3, 'answer': 'Geometry'},{'id': 4, 'answer': 'Trigonometry'},{'id': 5, 'answer': 'Calculus I'}],
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
        topic: this.state.choices[e.target.value],
        choices: [{'id': 0, 'answer': 'red'}, {'id': 1, 'answer': 42}, {'id': 2, 'answer': 'Yes'}],
        quizStarted: true,
        selected: e.target.value
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
        <TopicBody choices={this.state.choices} handleChange={this.handleChange}></TopicBody>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
