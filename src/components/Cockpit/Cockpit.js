import React from 'react'
import classes from './Cockpit.css'
const Cockpit = (props) => {

    const assignClasses = []
    let btnClass = ''
    if(props.showPersons){
        btnClass = classes.Red
    }

    if(props.persons.length <= 2){
        assignClasses.push(classes.red)
    }
    if(props.persons.length <= 1){
        assignClasses.push(classes.bold)
    }

    return (
        <div>
            <h1>Hi I'm React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button className={btnClass} onClick={this.togglePersonHandler}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit