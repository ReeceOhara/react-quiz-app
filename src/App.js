import React from 'react';
import './App.css';
import TopicHeader from './components/TopicHeader';
import TopicBody from './components/TopicBody';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {topic: 'None',
                questions: ['Pre-Algebra', 'Algebra I', 'Algebra II',
                      'Geometry', 'Trigonometry', 'Calculus I']
                };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({topic: e.target.value}, () => {
        console.log(this.state);
    });
    console.log(e.target.value);
}

  render() {
    console.log(this.state['topic']);
    
    return (
      <div className="App">
        <TopicHeader subject={this.state['topic']}></TopicHeader>
        <form>
        <TopicBody questions={this.state['questions']} handleChange={this.handleChange}></TopicBody>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
