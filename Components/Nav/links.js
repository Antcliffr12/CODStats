import React from 'react'
import { Link } from 'react-router-dom';


const Links = () => {

    const navStyle = {
        color: '#ffffff',
        textDecoration: 'none'
    };
    return (
        <>
            <Link style={navStyle} to="/"><li>Home </li></Link>
            <Link style={navStyle} to="/about"><li>About</li></Link>
            <Link style={navStyle} to="/test1"><li>Test 1</li></Link>
            <Link style={navStyle} to="/test2"><li>Test 2</li></Link>

        </>
    )
}

export default Links