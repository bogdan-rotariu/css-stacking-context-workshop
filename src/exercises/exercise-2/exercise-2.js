import React from 'react'
import './exercise-2.styles.scss'

export const Exercise2 = () => (
    <section className='exercise-2 container'>
        <div className='grid'>
            <header className='grid-header'>
                <div className='logo'>Logo</div>
                <nav className='navigation'>Navigation
                    <div className='dropdown'>Dropdown Navigation</div>
                </nav>
            </header>
            <main className='grid-main'>
                Main content
                <div className='tooltip'>tooltip</div>
            </main>
            {/*<main className='grid-main'>*/}
            {/*    <div className='product-list'>Product List</div>*/}
            {/*</main>*/}
            {/*<aside className='grid-sidebar'>*/}
            {/*    <div className='summary'>Summary</div>*/}
            {/*    <footer className='footer'>Footer</footer>*/}
            {/*</aside>*/}
        </div>
    </section>
)
