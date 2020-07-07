
import React, { Component } from 'react'
import { COLOR_GREEN, COLOR_BLACK } from '../utils'
import SectionIcon from './section-icon'
import { Carousel, CarouselItem } from 'reactstrap'

export default class TestimonySection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0,
            animating: false,
            data: [
                { name: 'alexis simpson', title: 'CEO & Developer', say: ' Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.' },
                { name: 'steven cole', title: 'User Interface Designer', say: ' Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.' },
                { name: 'Frank piener', title: 'Sales Manager', say: ' Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.' },
                { name: 'ashley lennon', title: 'IT Specialist', say: ' Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.' },
            ]
        }
    }

    next() {
        if (this.state.animating) return
        const index = this.state.activeIndex == this.state.data.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({
            activeIndex: index
        })
    }

    prev() {
        if (this.state.animating) return
        const index = this.state.activeIndex == 0 ? this.state.data.length - 1 : this.state.activeIndex - 1
        this.setState({
            activeIndex: index
        })
    }

    render() {
        return (
            <div>
                <SectionIcon src='/images/testi-section-icon.png' />
                <div style={{
                    padding: '77px 0 50px 0',
                    backgroundColor: COLOR_GREEN
                }}>
                    {/* testimonials */}
                    <div className='d-flex justify-content-center text-center'>
                        <Carousel
                            activeIndex={this.state.activeIndex}
                            next={() => this.next()}
                            previous={() => this.prev()}>
                            {this.state.data.map(item =>
                                <CarouselItem
                                    key={item.name}
                                    onExiting={() => this.setState({ animating: true })}
                                    onExited={() => this.setState({ animating: false })}>
                                    <div>
                                        <div className='row d-inline-block' style={{
                                            backgroundColor: '#e4e4e4',
                                            borderRadius: '4px',
                                            fontSize: '13px',
                                            padding: '16px'
                                        }}>
                                            <span
                                                className='mr-2'
                                                style={{ color: COLOR_GREEN, fontWeight: 'bold', }}>
                                                {item.name.toUpperCase()}
                                            </span>
                                            <span
                                                style={{ color: '#aaaaaa', fontStyle: 'italic' }}>
                                                {item.title}
                                            </span>
                                        </div>

                                        {/* testimony say */}
                                        <div style={{
                                            // lineHeight: '34px',
                                            fontSize: '20px',
                                            fontWeight: 200,
                                            marginTop: '30px',
                                            maxWidth: '1129px',
                                            padding: '0 50px',
                                            marginBottom: '30px',
                                            color: '#e4e4e4',
                                        }}>
                                            <i className='fa fa-quote-left mr-1' style={{ color: 'white' }} />
                                            <span>{item.say}</span>
                                            <i className='fa fa-quote-right ml-1' style={{ color: 'white' }} />
                                        </div>
                                    </div>
                                </CarouselItem>
                            )}
                        </Carousel>
                    </div>

                    {/* view pager navigation */}
                    <div className='row justify-content-center mt-2' style={{ margin: '0px' }}>
                        <PagerButton
                            className='mr-1'
                            left={true}
                            hoverColor={COLOR_BLACK}
                            onClick={() => this.prev()} />
                        <PagerButton
                            left={false}
                            hoverColor={COLOR_BLACK}
                            onClick={() => this.next()} />
                    </div>
                </div>

                {/* companies */}
                <div
                    className='d-flex align-items-center justify-content-center'
                    style={{ backgroundColor: COLOR_BLACK }}>
                    <PagerButton className='mr-2' left={true} hoverColor={COLOR_GREEN} />
                    <img
                        className='companies'
                        style={{ margin: '50px 0', objectFit: 'cover', maxWidth: '65%' }}
                        src='/images/companies.png'
                    />
                    <PagerButton className='ml-3' left={false} hoverColor={COLOR_GREEN} />
                </div>

                <style jsx global>{`
                    .carousel-inner {
                        height: 179px;
                    }
                    .carousel-wrapper {
                        transition: set-nth($carousel-transition, 1, height);
                    }
                `}</style>
            </div>
        )
    }
}

class PagerButton extends Component {
    render() {
        return (
            <span 
                className={`pager-button ${this.props.className}`}
                onClick={this.props.onClick}>
                <i className={`fa fa-caret-${this.props.left ? 'left' : 'right'}`} />
                <style jsx>{`
                    .pager-button {
                        text-align: center;
                        color: ${COLOR_GREEN};
                        background-color: #e4e4e4;
                        width: 30px;
                        height: 30px;
                        line-height: 30px;
                        border-radius: 3px;
                        cursor: pointer;
                    }
                    .pager-button:hover {
                        color: white;
                        background-color: ${this.props.hoverColor};
                    }
                `}</style>
            </span>
        )
    }
}
