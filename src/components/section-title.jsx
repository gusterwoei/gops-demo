
import React, { Component } from 'react'
import { COLOR_GREEN } from '../utils'

export default class SectionTitle extends Component {
    renderTitle(title) {
        let arr = title.split(' ')
        if (this.props.reverse) {
            return (
                <span>
                    <span style={{
                        color: COLOR_GREEN,
                        paddingRight: '5px'
                    }}>
                        {arr[0]}
                    </span>
                    <span style={{ color: this.props.titleColor || '#383838' }}>
                        {arr.slice(1).join(' ')}
                    </span>
                </span>
            )
        }

        return (
            <span>
                <span style={{
                    color: this.props.titleColor || '#383838',
                    paddingRight: '5px'
                }}>
                    {arr.slice(0, arr.length - 1).join(' ')}
                </span>
                <span style={{ color: COLOR_GREEN }}>
                    {arr[arr.length - 1]}
                </span>
            </span>
        )
    }

    render() {
        return (
            <div className={this.props.className} style={{
                textAlign: 'center',
                ...this.props.style
            }}>
                {/* title */}
                <div
                    className='d-flex align-items-center justify-content-center'
                    style={{
                        fontWeight: 'bold',
                        fontSize: this.props.titleFontSize || '21px',
                        marginBottom: '10px',
                    }}>
                    {this.renderTitle(this.props.title.toUpperCase())}
                </div>

                {/* subtitle */}
                <div className='pr-3 pl-3' style={{
                    fontSize: '16px',
                    color: '#8a8a8a',
                    lineHeight: '16px',
                }}>{this.props.subtitle}</div>


                <style jsx>{`
                    .highlight {
                        color: ${COLOR_GREEN}
                    }
                `}</style>
            </div>
        )
    }
}

/**
 * decoration around the section title
 */
class TitleDeco extends Component {
    renderLines() {
        return (
            <div>
                <hr />
                <hr />

                <style jsx>{`
                    hr {
                        margin: 5px;
                        width: 100px;
                    }
                `}</style>
            </div>
        )
    }
    render() {
        return (
            <>
                {this.props.reverse ?
                    <div className={`d-flex ml-2`}>
                        <div className='dot' />
                        {this.renderLines()}
                    </div>
                    :
                    <div className={`d-flex mr-2`}>
                        {this.renderLines()}
                        <div className='dot' />
                    </div>
                }

                <style jsx>{`
                    .dot {
                        width: 15px;
                        height: 15px;
                        transform: rotate(45deg);
                        background-color: ${COLOR_GREEN};
                        border-radius: 3px;
                    }
                `}</style>
            </>
        )
    }
}
