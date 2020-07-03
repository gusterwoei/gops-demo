
import React, { Component } from 'react'
import { COLOR_GREEN } from '../utils'

export default class SectionTitle extends Component {
    render() {
        return (
            <div style={{
                textAlign: 'center',
                ...this.props.style
            }}>
                {/* title */}
                <div style={{
                    fontWeight: 'bold',
                    fontSize: '21px',
                    marginBottom: '10px',
                }}>
                    <span style={{
                        color: this.props.titleColor || '#383838',
                        paddingRight: '4px'
                    }}>{this.props.title.toUpperCase()}</span>
                    <span style={{
                        color: COLOR_GREEN
                    }}>{this.props.lastWord.toUpperCase()}</span>
                </div>

                {/* subtitle */}
                <div style={{
                    fontSize: '16px',
                    color: '#8a8a8a',
                    lineHeight: '16px',
                }}>{this.props.subtitle}</div>
            </div>
        )
    }
}
