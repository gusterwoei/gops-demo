import React, { Component } from 'react'
import SectionTitle from './section-title'
import { COLOR_GREY, COLOR_GREEN } from '../utils'

export default class OfferSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    icon: 'images/offer-1.png',
                    title: 'responsive & multipurpose',
                    subtitle: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.',
                },
                {
                    icon: 'images/offer-2.png',
                    title: 'easy customization',
                    subtitle: 'Proin in magna a ipsum viverra scelerisq enec turp, Nunc vestibulum fringilla accumsan ornare quis.',
                },
                {
                    icon: 'images/offer-3.png',
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

                <div 
                    className='row mr-auto ml-auto' 
                    style={{ margin: '50px 0px 0px 0px', maxWidth: '1300px' }}>
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
                style={{ maxWidth: '369px', margin: 'auto', padding: '0px 32px' }}>
                <img
                    src={this.props.icon}
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'contain',
                        borderRadius: '100px'
                    }}/>
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
                <div className='more-button'>READ MORE</div>


                <style jsx>{`
                    .more-button {
                        width: 80px;
                        height: 29px;
                        border: 1px solid #dedede;
                        border-radius: 5px;
                        font-size: 10px;
                        text-align: center;
                        cursor: pointer;
                        line-height: 29px;
                        background-color: transparent;
                        color: #8a8a8a;
                    }
                    .more-button:hover {
                        background-color: ${COLOR_GREEN};
                        color: white;
                    }
                `}</style>
            </div>
        )
    }
}
