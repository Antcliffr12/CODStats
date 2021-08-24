import React from 'react'
import Nav from '../Nav/Nav';

export default function Layout(props) {
    return (
        <>
            <Nav />
            <div className="main">
                     {props.children}
            </div>
            <footer>
                <h1>footer</h1>
            </footer>
        </>
    )
}
