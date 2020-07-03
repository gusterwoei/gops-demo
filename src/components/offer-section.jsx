import React, { Component } from 'react'
import SectionTitle from './section-title'
import { COLOR_GREY } from '../utils'

export default class OfferSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    icon: 'images/logo.png',
                    title: 'responsive & multipurpose',
                    subtitle: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.',
                },
                {
                    icon: 'images/logo.png',
                    title: 'easy customization',
                    subtitle: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.',
                },
                {
                    icon: 'images/logo.png',
                    title: 'awesome friendly support',
                    subtitle: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.',
                },
            ]
        }
    }

    render() {
        return (
            <div style={{ marginTop: '80px', marginBottom: '97px' }}>
                <SectionTitle
                    title='WHAT WE'
                    lastWord='OFFER'
                    subtitle='We offer our customers the best services & solutions, this is our main services list' />

                <div className='row' style={{ margin: '50px 0px 0px 0px' }}>
                    {this.state.data.map(item =>
                        <OfferSectionItem
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )}
                </div>
            </div>
        )
    }
}

class OfferSectionItem extends Component {
    render() {
        return (
            <div
                className='d-flex flex-column align-items-center p-1'
                style={{
                    maxWidth: '369px',
                    margin: 'auto',
                    padding: '0px 32px'
                }}>
                <img
                    src={this.props.icon}
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'contain',
                    }}
                // srcset="img/icon@2x.png 2x,img/icon@3x.png 3x"
                />
                <div style={{
                    fontSize: '14px',
                    color: COLOR_GREY,
                    marginBottom: '20px',
                    marginTop: '30px',
                }}>{this.props.title.toUpperCase()}</div>
                <div style={{
                    fontSize: '14px',
                    color: '#7a7a7a',
                    lineHeight: '24px',
                    marginBottom: '20px',
                }}>{this.props.subtitle}</div>

                {/* button */}
                <div style={{
                    width: '80px',
                    height: '29px',
                    border: '1px solid #dedede',
                    borderRadius: '5px',
                    fontSize: '10px',
                    color: '8a8a8a',
                    textAlign: 'center',
                    cursor: 'pointer',
                    lineHeight: '29px'
                }}>READ MORE</div>
            </div>
        )
    }
}
