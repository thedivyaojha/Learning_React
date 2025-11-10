import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    //a counter value that will be injected in the return statement of the app.jsx, in the html tag= {evaluated expression}
    let [counter, setCounter]=useState(10)

    const addValue = () => {
        //to check if its working= inspect=>console
        console.log("add 1 to", counter);
        counter+=1
        setCounter(counter)
        console.log("done", counter);

    }

    const delValue = () => {
        console.log("del 1 to", counter)
        if(counter==0){
            console.log("Counter cant be negative", counter);
            return
        }
        counter -= 1
        setCounter(counter)
        console.log("done", counter);
    }


    return (
        <>
            <h1> my first react project</h1>
            <h2> counter value : {counter} </h2>
            <button
                onClick={addValue}
            > add value </button>
            <br/>
            <button
            onClick={delValue}
            > decrease value </button>

        </>
    )
}

export default App
