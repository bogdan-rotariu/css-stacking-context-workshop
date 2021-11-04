import React from 'react'
import './App.styles.scss'
// eslint-disable-next-line no-unused-vars
import { Example1, Example2, Example3 } from './examples'
// eslint-disable-next-line no-unused-vars
import { Exercise1, Exercise2 } from './exercises'

function App() {
    return (
        <div className='page'>
            <header className='header'>
                <h1 className='title'>
                    <span className='title-text'>CSS Stacking Context</span>
                    <span className='robot-face'>🤖</span>
                </h1>
            </header>
            <main className='main'>
                {/*<Example1 />*/}
                {/*<Example2 />*/}
                {/*<Example3 />*/}
                {/*<Exercise1 />*/}
                {/*<Exercise2 />*/}
            </main>
        </div>
    )
}

export default App
