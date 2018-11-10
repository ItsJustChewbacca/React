import React from 'react';

// Functional Component - Only concerned with the UI
const PeopleList = ({people}) => { // props.people
  const peopleList = people.map(person => {
    return person.age > 20 ? (
      <div className='person' key={person.id} >
        <div>{person.name}</div>
        <div>{person.age}</div>
        <div>{person.gender}</div>
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