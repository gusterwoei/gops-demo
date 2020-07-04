import React, { Component } from 'react'
import { COLOR_GREEN } from '../utils'

export default class AppButton extends Component {
    render() {
        return (
            <div
                className={`app-button ${this.props.className}`}
                style={{
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '13px',
                    color: '#e4e4e4',
                    textAlign: 'center',
                    cursor: 'pointer',
                    ...this.props.style
                }}
                onClick={this.props.onClick}>
                {this.props.children}

                <style jsx>{`
                    .app-button {
                        background-color: ${COLOR_GREEN};
                    }
                    .app-button:hover {
                        background-color: #06968a;
                    }
                `}</style>
            </div>
        )
    }
}
