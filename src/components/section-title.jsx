
import React, { Component } from 'react'
import { COLOR_GREEN } from '../utils'

export default class SectionTitle extends Component {
    render() {
        return (
            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: '16px'
                }}>
                <span style={{
                    color: '#383838',
                    paddingRight: '3px'
                }}>{this.props.text}</span>
                <span style={{
                    color: COLOR_GREEN
                }}>{this.props.lastWord}</span>
            </div>
        )
    }
}
