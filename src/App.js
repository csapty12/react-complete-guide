import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

export default () => {

    const [personState, setPersonState] = useState({
        persons: [
            {name: "slott", age: 25},
            {name: "carl", age: 26},
            {name: "fred", age: 28}
        ]
    })

    const [displayState, setDisplayState] = useState(true);

    const displayStateHandler = () => {
        setDisplayState(!displayState)
    }


    const deletePersonHandler = (index) => {
        let originalPersonList = [...personState.persons];
        originalPersonList.splice(index, 1);
        setPersonState({
            persons: [...originalPersonList]
        });
    }

    const nameChangeHandler = (event, index) => {
        const person = personState.persons[index]; //grabbing the person object that is to be manipulated
        const personToModify = { //create a copy of the person so that its a change to the copy not the original
            ...person
        }
        personToModify.name = event.target.value; //change the name of the item
        const personsList = [...personState.persons]; //create a copy of the current state so we are not directly manipulating it
        personsList[index] = personToModify; //let the index of the copy = the new object .: the update has occured
        setPersonState({ //set the person state to the new person state.
            persons: [...personsList]
        });

    }

    let persons = null;
    if (displayState) {
        persons = (
            <div>
                {personState.persons.map((person, index) =>
                    <Person
                        key={index}
                        name={person.name}
                        age={person.age}
                        click={() => deletePersonHandler(index)}
                        changed={(event) => nameChangeHandler(event, index)}
                    />)}
            </div>)
    }

    const [paraLength, setParaLength] = useState(0);
    const [paraValue, setParaValue] = useState("");
    const paragraphLengthHandler = (event) => {
        setParaLength(event.target.value.length);
        setParaValue(event.target.value);
    }

    const deleteItemHandler = (index) => {
        let paraToModify = [...paraValue];
        paraToModify.splice(index, 1);
        setParaLength(paraLength-1)
        setParaValue( paraToModify.join(''));
    }

    let charValue = null;
    if (paraLength > 0) {
        charValue = (
            <div>
                {paraValue.split("").map((char, index) => <Char key={index} value={char} click={()=> deleteItemHandler(index)} />) }
            </div>
        )
    }

    return (
        <div className="App">
            <h1>hello world! I am a react app!</h1>
            <button onClick={displayStateHandler}>show/hide users</button>
            {persons}

            <input type={"text"} onChange={(event) => paragraphLengthHandler(event)} value={paraValue}/>
            <Validation paragraphLength={paraLength}/>
            {charValue}
        </div>
    );
}

