import React, { Component } from 'react'
import SectionTitle from './section-title'
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';

export default class SkillSection extends Component {

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
            <div
                className='text-center'
                style={{ paddingTop: '77px', paddingBottom: '70px', backgroundColor: '#383838' }}>
                <SectionTitle
                    title='our powerful'
                    lastWord='skills'
                    titleColor='#e4e4e4'
                    subtitle='We offer our customers the best services & solutions, this is our main services list' />

                <div
                    className='row justify-content-center'
                    style={{ margin: '50px 0px 0px 0px' }}>
                    {this.state.skills.map(item =>
                        <div
                            key={item.title}
                            className='m-4'
                            style={{ width: 100, height: 100 }}>
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
        )
    }
}
