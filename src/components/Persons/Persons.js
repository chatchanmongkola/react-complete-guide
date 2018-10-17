import React,{Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{
    render(){
        return this.props.persons.map((person,index) => {
            return <Person 
              name={person.name}
              age={person.age}
              key={index}
              click={() => this.props.click(index)}
              changed={(event) => this.props.changed(event,person.id)}
              />
          })
    }
}

export default Persons