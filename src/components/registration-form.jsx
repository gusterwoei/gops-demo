import React, { Component } from 'react'
import AppButton from './app-button'

export default class RegistrationForm extends Component {
    submit() {}

    render() {
        return (
            <>
                <div className='container' style={{
                    maxWidth: '1170px',
                    margin: 'auto',
                    padding: '89px 20px 77px 20px'
                }}>
                    <div className='title'>Register Your Interest</div>
                    <form>
                        <div
                            style={{
                                borderRadius: '5px',
                                border: '#dedede solid 1px',
                                padding: '30px',
                            }}>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input className='form-control' placeholder='Name' />
                                    </div>
                                    <div className='col-md-6 occupation'>
                                        <select className='form-control' placeholder='Occupation'>
                                            <option value='Graphics Designer'>Graphics Designer</option>
                                            <option value='Software Engineer'>Software Engineer</option>
                                            <option value='Project Manager'>Project Manager</option>
                                            <option value='System Architect'>System Architect</option>
                                            <option value='System Analyst'>System Analyst</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input className='form-control' type='email' placeholder='Email Address' />
                                    </div>
                                    <div className='col-md-6'>
                                        <input className='form-control contactno' type='phone' placeholder='Contact No' />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <textarea className='form-control' placeholder='Message...' rows={3} />
                                    </div>
                                    <div className='col-md-6'>
                                    </div>
                                </div>
                                <AppButton
                                    className='mt-4'
                                    style={{ maxWidth: '330px' }}
                                    onClick={() => this.submit()}>
                                    SUBMIT MESSAGE
                                </AppButton>
                            </div>
                        </div>
                    </form>
                </div>

                <style jsx>{`
                    .title {
                        font-size: 60px;
                        font-weight: 500;
                        font-style: italic;
                        color: #00a99d;
                        margin-bottom: 20px;
                        margin-left: 15px;
                    }
                    .form-control {
                        font-size: 12px;
                        line-height: 22px;
                    }
                    .row {
                        margin-top: 30px;
                    }
                    @media only screen and (max-width: 768px) {
                        .title {
                            font-size: 35px;
                        }
                        .occupation, .contactno {
                            margin-top: 30px;
                        }
                    }
                `}</style>
            </>
        )
    }
}
