import React from 'react'
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'

const Cockpit = (props) => {

    const assignClasses = []
    let btnClass = classes.Button

    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ')
    }
    if(props.persons.length <= 2){
        assignClasses.push(classes.red)
    }
    if(props.persons.length <= 1){
        assignClasses.push(classes.bold)
    }

    return (
        <Aux>
        <h1>{props.appTitle}</h1>
        <p className={assignClasses.join(' ')}>This is really working</p>
        <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        <button onClick={props.login}>Log in</button>
        </Aux>
    )
}

export default Cockpit