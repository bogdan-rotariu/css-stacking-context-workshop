import './App.styles.scss'
import { Exercise1 } from './exercises'

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
                <Exercise1 />
            </main>
        </div>
    )
}

export default App
