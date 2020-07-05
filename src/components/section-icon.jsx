/**
 * @author Guster
 * @email gusterwoei@gmail.com
 * @create date 2020-07-05 09:27:45
 * @modify date 2020-07-05 09:27:45
 * @desc section icon at the top
 */

import React, { Component } from 'react'

export default class SectionIcon extends Component {
    render() {
        return (
            <img
                src={this.props.src}
                style={{
                    width: '40px',
                    height: '40px',
                    position: 'absolute',
                    margin: '-20px auto',
                    left: 0,
                    right: 0,
                }} />
        )
    }
}
