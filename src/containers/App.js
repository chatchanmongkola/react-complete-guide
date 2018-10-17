import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'


export const AuthContext = React.createContext(false)

class App extends PureComponent {

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
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }
  
  componentWillMount(){
    console.log('[App.js] inside componentWillMount()')
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate',nextProps,nextState)
  //   return nextState.persons !== this.state.persons || 
  //   nextState.showPersons !== this.state.showPersons
  // }
  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate',nextProps,nextState)
  }

  static getDerivedStateFromProps(nextProps,prevState){
    console.log('[UPDATE App.js] inside getDerivedStateFromProps',nextProps,prevState)
    return prevState
  }

  getSnapshotBeforeUpdate(){
    console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate')
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate')
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
    this.setState((prevState)=>{
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true})
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
          isAuthenticated={this.state.authenticated}
        />
    }

    return (

      <Aux>
          <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>

    );
  }
}

export default withClass(App,classes.App);
