import React from 'react';
import './App.css';
import TopicBody from './components/TopicBody';
var data = require('./components/FakeData');

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
    //Get selected choice
    console.log(e.target.nextSibling);
    //Send textContent to child component so we can update style
    this.setState({
      selected: e.target.nextSibling.textContent
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //If the quiz hasnt started yet, change the header to the first question
    console.log(data);
    //Change quiz started to true
    //Check correct answer
    //Give feedback
    //Update question header
    //Update choices
  }

  render() {
    console.log(this.state['topic']);
    
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <TopicBody choices={this.state.choices}
         onChange={this.handleChange}
        selectedChoice={this.state.selected}></TopicBody>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
