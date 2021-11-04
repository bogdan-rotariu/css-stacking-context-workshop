import React from 'react'
import './example-2.styles.scss'

export const Example2 = () => (
    <section className='example-2'>
        <div className='left'>
            z-index: 1;
            <div className='inner'>z-index: 99999;</div>
        </div>
        <div className='right'>
            z-index: 2;
            <div className='inner'>z-index: 1;</div>
        </div>
    </section>
)
