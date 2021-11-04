import React from 'react'
import './exercise-1.styles.scss'
// import './exercise-1.solution.styles.scss' //DO NOT LOOK INTO IT

export const Exercise1 = () => (
    // Can you make the first white box stack behind the other ones? Without:
    //* touching the markup
    //* adding / removing / changing any position or z-index properties
    <section className='exercise-1 container'>
        <div>
            <span className='box box-1' />
        </div>
        <div>
            <span className='box box-2' />
        </div>
        <div>
            <span className='box box-3' />
        </div>
    </section>
)
