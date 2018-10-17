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
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit