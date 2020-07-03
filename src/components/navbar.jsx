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
                { text: 'CONTACT', active: true },
            ]
        }
    }

    render() {
        return (
            <div className='d-flex align-items-center p-4'>
                <img 
                    className='flex-grow-1 mr-auto' 
                    src='/images/logo.png'
                    width='60px'
                    height='60px' />
                <div className='row mr-2'>
                    {this.state.menu.map(item =>
                        <NavButton active={item.active}>{item.text}</NavButton>
                    )}
                </div>
            </div>
        )
    }
}

class NavButton extends Component {
    render() {
        return (
            <div style={{
                padding: '16px',
                color: this.props.active ? 'white' : COLOR_GREY,
                borderRadius: '5px',
                backgroundColor: this.props.active ? COLOR_GREEN : 'transparent',
                fontWeight: 'bold',
            }}>
                {this.props.children}
            </div>
        )
    }
}