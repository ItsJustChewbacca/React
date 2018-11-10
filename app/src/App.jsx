import React, { Component } from 'react';
import PeopleList from './people.jsx';
import AddPerson from './AddPerson.jsx';




class App extends Component {
  state = {
    people : [
      { name: "Luke", age: 24, gender: "Male", id: 1 },
      { name: "Sarah", age: 19, gender: "Female", id: 2 },
      { name: "Sarbear", age: 21, gender: "Bear/person", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>
          Luke's React/Redux App
        </h1>
        <p>Welcome</p>
        <PeopleList people={this.state.people} />
        <AddPerson />
      </div>
    );
  }
}

export default App;
