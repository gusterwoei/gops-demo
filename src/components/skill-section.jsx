import React, { Component } from 'react'
import SectionTitle from './section-title'
import SectionIcon from './section-icon'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export default class SkillSection extends Component {
    render() {
        return (
            <>
                <SkillLevels />
                <Features />
            </>
        )
    }
}

/**
 * SKill level meters
 */
class SkillLevels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            skills: [
                { percentage: 75, title: 'web design' },
                { percentage: 92, title: 'web development' },
                { percentage: 68, title: 'speed optimization' },
                { percentage: 100, title: 'customer support' },
                { percentage: 83, title: 'marketing' },
                { percentage: 50, title: 'advertisement' },
            ]
        }
    }

    render() {
        return (
            <div>
                <SectionIcon src='/images/skill-section-icon.png' />

                <div style={{ paddingTop: '77px', paddingBottom: '70px', backgroundColor: '#383838' }}>
                    <SectionTitle
                        title='our powerful skills'
                        titleColor='#e4e4e4'
                        subtitle='We offer our customers the best services & solutions, this is our main services list' />

                    <div
                        className='row justify-content-center text-center'
                        style={{ margin: '30px 0px 0px 0px' }}>
                        {this.state.skills.map(item =>
                            <div
                                key={item.title}
                                style={{ width: 100, height: 100, margin: '30px' }}>
                                <CircularProgressbarWithChildren
                                    value={item.percentage}
                                    styles={{
                                        path: {
                                            stroke: `rgba(0, 169, 157, ${item.percentage / 100})`,
                                            strokeLinecap: 'butt',
                                            strokeWidth: '3px',
                                            transition: 'stroke-dashoffset 0.5s ease 0s',
                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },
                                        trail: {
                                            stroke: '#d6d6d6',
                                            strokeLinecap: 'butt',
                                            strokeWidth: '3px',
                                            transform: 'rotate(0.25turn)',
                                            transformOrigin: 'center center',
                                        },
                                        text: {
                                            fill: '#f88',
                                            fontSize: '16px',
                                            textAlign: 'center'
                                        },
                                    }}>
                                    <div style={{ fontSize: 16, marginTop: -20, color: '#e4e4e4', fontWeight: 'bold' }}>
                                        {item.percentage}%
                                    </div>
                                </CircularProgressbarWithChildren>

                                {/* skill title */}
                                <div style={{
                                    color: '#8a8a8a',
                                    lineHeight: '16px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    lineHeight: 1.14,
                                    marginTop: '10px'
                                }}>{item.title.toUpperCase()}</div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * Features
 */
class Features extends Component {
    constructor(props) {
        super(props)
        this.state = {
            features: [{
                icon: '/images/icon.png',
                title: 'responsive & multipurpose',
                subtitle: 'Desktops, Tablets & Phones',
            }, {
                icon: '/images/icon.png',
                title: 'easy customization',
                subtitle: 'One Click Demo Content Installation',
            }, {
                icon: '/images/icon.png',
                title: 'unlimited features',
                subtitle: 'Shortcodes, Typography & Different Layouts',
            }, {
                icon: '/images/icon.png',
                title: 'clean & modular coding',
                subtitle: '100% Clean, Valid & Well-Commented Coding',
            }, {
                icon: '/images/icon.png',
                title: 'the best e-commerce solutions',
                subtitle: 'WooCommerce Fully Integration',
            }, {
                icon: '/images/icon.png',
                title: 'awesome friendly support',
                subtitle: 'Free Lifetime Support & Updates',
            },]
        }
    }
    render() {
        return (
            <div
                className='d-flex flex-wrap justify-content-center'
                style={{ margin: '71px auto 94px auto', maxWidth: '1300px' }}>
                {this.state.features.map(item =>
                    <FeatureItem
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                )}
            </div>
        )
    }
}

class FeatureItem extends Component {
    render() {
        return (
            <div className='d-flex p-3' style={{ width: '338px' }}>
                <img style={{ marginRight: '19px' }} src={this.props.icon} width='50px' height='70px' />
                <div>
                    <div className='feature-item-title'>{this.props.title.toUpperCase()}</div>
                    <div className='feature-item-subtitle'>{this.props.subtitle}</div>
                    <div className='feature-item-body mt-2'>Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.</div>
                </div>

                <style jsx>{`
                    .feature-item-title {
                        font-size: 14px;
                        font-weight: bold;
                        text-align: left;
                        color: #606060;
                    }
                    .feature-item-subtitle {
                        font-size: 12px;
                        font-weight: 500;
                        margin-top: 3px;
                        text-align: left;
                        color: #aaaaaa;
                    }
                    .feature-item-body {
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 1.71;
                        text-align: left;
                        color: #7a7a7a;
                    }
                `}</style>
            </div>
        )
    }
}
