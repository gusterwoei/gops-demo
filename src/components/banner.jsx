import React, { Component } from 'react'
import { COLOR_BLACK, SECTION_MAX_WIDTH } from '../utils'
import SectionTitle from './section-title'

export default class Banner extends Component {
    render() {
        return (
            <div style={{ backgroundImage: "linear-gradient(45deg, #ad4323, #fefda6)" }}>
                {/* <img
                    src='/images/home.png'
                    srcSet="/images/home@2x.png 2x,/images/home@3x.png 3x"
                    style={{
                        width: '100%',
                        height: '750px',
                        objectFit: 'cover',
                    }} /> */}

                {/* new banner (without image) */}
                <div style={{
                    maxWidth: SECTION_MAX_WIDTH,
                    margin: 'auto'
                }}>
                <div className='banner-container text-center'>
                    <div>WHAT ARE YOU WAITING FOR ?</div>
                    <div className='banner-big-title'>LET'S BE CREATIVE!</div>
                    <div
                        className='pt-1 pb-1 pl-2 mt-3 banner-highlight-title'
                        style={{
                            backgroundColor: '#333333',
                            color: 'white',
                            borderRadius: '3px',
                            fontStyle: 'italic',
                            textAlign: 'left'
                        }}>
                        LOREM IPSUM DOLOR SI AMET
                    </div>
                    <SectionTitle
                        style={{ marginTop: '39px' }}
                        reverse={true}
                        titleFontSize='26px'
                        title='start doing that' />
                    <img style={{ marginTop: '30px' }} src='/images/banner-button.png' />
                </div>
                </div>


                <style jsx>{`
                    .banner-container {
                        max-width: 620px;
                        padding: 200px 0 200px 0;
                        margin-left: 50px;
                        // margin-left: 130px;
                    }
                    .banner-big-title {
                        font-size: 65px;
                        line-height: 60px;
                        font-weight: 700;
                    }
                    @media only screen and (max-width: 768px) {
                        .banner-container {
                            margin-right: auto;
                            margin-left: auto;
                        }
                        .banner-big-title {
                            font-size: 60px;
                        }
                        .banner-highlight-title {
                            margin: 0 20px;                            
                        }
                    }
                `}</style>
            </div>
        )
    }
}
