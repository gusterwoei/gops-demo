import React, { Component } from 'react'
import { COLOR_BLACK } from '../utils'

export default class Footer extends Component {
    render() {
        return (
            <div
                className='text-center'
                style={{
                    padding: '58px 30px 27px 30px',
                    backgroundColor: '#333333',
                    fontSize: '14px',
                    color: '#cccccc'
                }}>
                <span>Copyright © 2017 APD Digital Services Sdn Bhd, All Rights Reserved.</span>
            </div>
        )
    }
}
