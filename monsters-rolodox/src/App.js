import './App.css';
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState({monsters: res}));
  }
  
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <>
      <div className="App">
        <SearchBox
          placeholder="Search monsters"
          onChange={e => this.setState({searchField: e.target.value})}
        />
      <CardList monsters={filteredMonsters}/>
      </div>  
      </>
    );
  }
}

export default App;
