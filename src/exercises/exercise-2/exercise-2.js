import React from 'react'
import './exercise-2.styles.scss'

export const Exercise2 = () => (
    // Can you make the toaster go over the header, without using any z-index properties or altering the markup?
    <section className='exercise-2 container'>
        <div className='grid'>
            <header className='grid-header'>
                <div className='logo'>Logo</div>
                <nav className='navigation'>Navigation</nav>
            </header>
            <main className='grid-main'>
                Main content
                <div className='toaster'>toaster notification</div>
            </main>
        </div>
    </section>
)
