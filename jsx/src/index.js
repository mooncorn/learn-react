import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const btnText = 'Click me!'

    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{btnText}</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))