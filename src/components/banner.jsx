import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <img 
                    src='/images/home.png'
                    srcSet="/images/home@2x.png 2x,/images/home@3x.png 3x"
                    style={{
                        width: '100%',
                        height: '750px',
                        objectFit: 'cover',
                    }} />
            </div>
        )
    }
}
