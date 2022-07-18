import React from 'react';
import './navbar.css';
import ReactDOM from 'react-dom';

export class NavBar extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <nav>
                <a className='navlinks' href="/"> HOME</a> 
                <a className='navlinks' href="/"> PROJECTS</a>
                <a className='navlinks' href="/"> CONTACT</a>
            </nav>
        )
    }
}

