import React, { Component } from 'react'
import { COLOR_GREEN, COLOR_GREY } from '../utils'

export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menu: [
                { text: 'HOME' },
                { text: 'PORTFOLIO' },
                { text: 'BLOG' },
                { text: 'PAGES' },
                { text: 'FEATURES' },
                { text: 'MEGA MENU' },
                { text: 'CONTACT' },
            ]
        }
    }

    render() {
        return (
            <nav
                className="d-flex align-items-center p-4 navbar navbar-expand-lg navbar-light bg-light"
                style={{ backgroundColor: '#f9f9f9' }}>

                <img
                    className='flex-grow-1 mr-auto'
                    src='/images/logo.png'
                    width='60px'
                    height='60px' />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="row mr-2 collapse navbar-collapse"
                    id="navbarSupportedContent"
                    style={{ flexGrow: 0 }}>
                    <div className="navbar-nav">
                        {this.state.menu.map(item =>
                            <NavButton
                                key={item.text}
                                className="nav-item"
                                active={item.active}>
                                {item.text}
                            </NavButton>
                        )}
                    </div>
                </div>
            </nav>

        )
    }
}

class NavButton extends Component {
    render() {
        return (
            <div
                className={this.props.className}
                style={{
                    padding: '16px',
                    color: this.props.active ? 'white' : COLOR_GREY,
                    borderRadius: '5px',
                    backgroundColor: this.props.active ? COLOR_GREEN : 'transparent',
                    fontWeight: 'bold',
                    ...this.props
                }}>
                {this.props.children}
            </div>
        )
    }
}