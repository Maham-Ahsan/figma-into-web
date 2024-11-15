"use client"
import React from 'react'


export default function RecentPost(){
    return(
        <>
        <div className="recent-post">
        <div className='container'>
            <div className="main">
            <div className='headings'>
                <h3>Recent Post</h3>
                <button className='view' >View All</button>
                </div>
                <div className='cards'>
                    <div className='post'>
                        <h2 className='caed-heading'>Making a design system feom scratch</h2>
                        <p className='date'>12 Feb 2020 | Design, Pattern</p>
                        <p className='paragraph'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className='post'>
                        <h2 className='card-heading'>Making a design system feom scratch</h2>
                        <p className='date'>12 Feb 2020 | Design, Pattern</p>
                        <p className='paragraph'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    </div>
                    </div>
            </div>
            </div>
            </>
    )
}
