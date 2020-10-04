import React, { useState } from "react";

import "./AddPerson.css";

const addPerson = (props) => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const nameChangedHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setPerson((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const ageChangedHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setPerson((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="AddPerson">
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={nameChangedHandler}
        value={person.name}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={ageChangedHandler}
        value={person.age}
      />

      <button onClick={() => props.personAdded(person.name, person.age)}>
        Add Person
      </button>
    </div>
  );
};

export default addPerson;
