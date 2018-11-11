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
  //Passing these functions down as props within the render function.
  addPerson = (person) => {
    person.id = Math.random();
    // Using the spread operator to make sure I don't alter the original array.
    let people = [...this.state.people, person]
    this.setState({
      people: people
    })
  }
  deletePerson = (id) => {
    //Using the filter operation to delete from the state to make sure I don't alter the original array
    let people = this.state.people.filter(person => {
      return person.id !== id
    });
    this.setState({
      people: people
    })
  }
  render() {
    return (
      <div className="App">
        <h1>
          Luke's React/Redux App
        </h1>
        <p>Welcome</p>
        <PeopleList  deletePerson={this.deletePerson} people={this.state.people} />
        <AddPerson addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
