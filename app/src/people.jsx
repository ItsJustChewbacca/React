import React from 'react';
import './people.css';

// Functional Component - Only concerned with the UI
const PeopleList = ({people, deletePerson}) => { // props.people
  const peopleList = people.map(person => {
    return person.age > 20 ? (
      <div className='person' key={person.id} >
        <div>{person.name}</div>
        <div>{person.age}</div>
        <div>{person.gender}</div>
        {/* When invoking a function passed down as props - Wrap function in anom arrow function */}
        <button onClick={() => {deletePerson(person.id)}}>Delete Person</button>
      </div>
    ) :  null
  })
  return(
    <div className="person-list">
      {peopleList}
    </div>
  )
}

export default PeopleList;