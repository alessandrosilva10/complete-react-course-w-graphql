import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monsters: [
        {
          name: 'Frankstein'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        }
      ]
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState({monsters: res}));

  }
  //Assistir aula 17
  render(){
    return (
      <>
      <div className="App">
      <CardList monsters={this.state.monsters}/>
      </div>  
      </>
    );
  }
}

export default App;
