import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  // Component Life Cycle
  // - constructor super
  // - componentWillMount()
  // - render()
  // - componentDidMount()

  constructor(props){
    super(props)
    console.log('[App.js] inside constructor',props)
    this.state = {
      persons: [
        { id: '1', name: 'Max', age: 28},
        { id: '2', name: 'Manu', age: 29},
        { id: '3', name: "Stephanie", age: 26} 
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }
  
  componentWillMount(){
    console.log('[App.js] inside componentWillMount()')
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()')
  }

  // state = {
  //   persons: [
  //     { id: '1', name: 'Max', age: 28},
  //     { id: '2', name: 'Manu', age: 29},
  //     { id: '3', name: "Stephanie", age: 26} 
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })

    const person = {...this.state.persons[personIndex]}
    
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] inside render()')
    let persons = null

    if (this.state.showPersons) {

      persons = 
        <Persons 
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (

        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
            />
            {persons}
        </div>

    );
  }
}

export default App;
