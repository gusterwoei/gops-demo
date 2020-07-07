import React, { Component } from 'react'
import { COLOR_GREEN, COLOR_GREY, COLOR_BLACK } from '../utils'

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
                    cursor: this.props.disabled ? 'not-allowed' : 'pointer',
                    ...this.props.style
                }}
                onClick={this.props.disabled ? null : this.props.onClick}>

                {this.props.loading ? <div className="loader" /> : this.props.children}

                <style jsx>{`
                    .app-button {
                        height: 39px;
                        background-color: ${this.props.disabled ? '#76c4bd' : COLOR_GREEN};
                    }
                    .app-button:hover {
                        background-color: ${this.props.disabled ? '#76c4bd' : '#06968a'};
                    }
                    .loader {
                        border: 2px solid #f3f3f3; 
                        border-top: 2px solid ${COLOR_BLACK}; 
                        border-radius: 50%;
                        margin: auto;
                        width: 20px;
                        height: 20px;
                        animation: spin 2s linear infinite;
                    }
                      
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        )
    }
}
