import React, { Component } from 'react'
import { COLOR_GREEN, COLOR_GREY, SECTION_MAX_WIDTH } from '../utils'

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
            <div
                id={this.props.id} style={{ backgroundColor: '#f9f9f9' }}
                className='sticky-top'>
                <nav
                    className="d-flex align-items-center m-auto navbar navbar-expand-lg navbar-light"
                    style={{ maxWidth: SECTION_MAX_WIDTH }}>

                    {/* app logo */}
                    <a href='/' className='flex-grow-1 mr-auto'>
                        <img
                            className='logo'
                            src='/images/logo.png'
                            width='60px'
                            height='60px' />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* menu items */}
                    <div
                        className="row mr-2 collapse navbar-collapse"
                        id="navbarSupportedContent"
                        style={{ flexGrow: 0 }}>
                        <div className="navbar-nav">
                            {this.state.menu.map(item =>
                                <NavButton
                                    key={item.text}
                                    className="nav-item mr-1"
                                    active={item.active}>
                                    {item.text}
                                </NavButton>
                            )}
                        </div>
                    </div>
                </nav>

                <style jsx>{`
                    .logo {
                        width: 50px;
                        height: 50px;
                    }
                `}</style>
            </div>
        )
    }
}

class NavButton extends Component {
    render() {
        return (
            <div
                className={`nav-button ${this.props.className}`}
                style={{
                    padding: '16px',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    cursor: 'pointer',
                    ...this.props
                }}>
                {this.props.children}

                <style jsx>{`
                    .nav-button {
                        color: ${COLOR_GREY};
                    }
                    .nav-button:hover {
                        background-color: ${COLOR_GREEN};
                        color: white;
                    }
                    @media only screen and (max-width: 768px) {
                        margin-top: 10px;
                    }
                `}</style>
            </div>
        )
    }
}