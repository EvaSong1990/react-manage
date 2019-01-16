import React, {Component} from 'react'
import logo from '../logo.svg'
import TopMenu from './topMenu'

export default class HeaderComponent extends Component {
    render() {
        return (
            <header className="App-header clearfix">
                <img className="App-logo" src={logo}/>
                <h1 className="App-title">My First React App</h1>
                <TopMenu />
            </header>
        )
    }
}