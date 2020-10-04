import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionsType from "../components/store/actions";

import { connect } from "react-redux";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAdd} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (name, age) =>
      dispatch({ type: actionsType.ADD, personData: { name: name, age: age } }),
    onDelete: (id) => dispatch({ type: actionsType.DELETE, persElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
