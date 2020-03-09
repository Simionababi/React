import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDriveStateFromProps", props);
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps", props);
  // }

  // componentWillUpdate() {
  //   console.log("[Persons.js] componentWillUpdate");
  // }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    console.log(
      "next props:",
      nextProps.persons,
      "this props:",
      this.props.persons
    );
    console.log(nextProps.perosns != this.props.perosns);

    if (nextProps.perosns !== this.props.perosns) {
      console.log("here");
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate() {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevStates, snapshot) {
    console.log("[Persons.js] componentDidUpdate", snapshot);
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <div>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={event => this.props.changed(event, person.id)}
            key={person.id}
          />
        </div>
      );
    });
  }
}

export default Persons;
