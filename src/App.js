import React from 'react';
import './App.css';
import TopicBody from './components/TopicBody';
var data = require('./components/FakeData').default.questionList;

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {topic: 'None',
                choices: [{'id': 0, 'answer': 'Pre-Algebra'},{'id': 1, 'answer': 'Algebra I'},{'id': 2, 'answer': 'Algebra II'},
                {'id': 3, 'answer': 'Geometry'},{'id': 4, 'answer': 'Trigonometry'},{'id': 5, 'answer': 'Calculus I'}],
                quizStarted: false,
                selected: 'na',
                question: null
                };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    //Get selected choice
    console.log(e.target.nextSibling);
    //Send textContent to child component so we can update style
    //Might change so that this state only gets set onSubmit. Will need to change the way styling works
    this.setState({
      selected: e.target.nextSibling.textContent
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //Change quiz started to true
    //Search through data and look for the answer the user selected
    //Also gets random question from data and displays it to head
    for(let i in data){
      if(data[i].name === this.state.selected){
        let rand = Math.floor((Math.random() * data.length));
        this.setState({question: data[i].questions[rand],
        quizStarted: true});
      }
      break;
    }
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
        selectedChoice={this.state.selected}
        question={this.state.question}>
        </TopicBody>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
