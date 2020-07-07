import React, { Component } from 'react'
import AppButton from './app-button'
import firebase from 'firebase'
import update from 'immutability-helper';

export default class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            loading: false,
            data: {
                name: '',
                email: '',
                occupation: 'Graphics Designer',
                phone: '',
                message: ''
            }
        }

        const firebaseConfig = {
            apiKey: "AIzaSyB76RVjO9RPUijUvmMseUY9-GJO4NVMgWc",
            authDomain: "growthops-demo.firebaseapp.com",
            databaseURL: "https://growthops-demo.firebaseio.com",
            projectId: "growthops-demo",
            storageBucket: "growthops-demo.appspot.com",
            messagingSenderId: "490497491338",
            appId: "1:490497491338:web:e3112ff6bc3ddaba0fc873"
        }

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }

    componentDidMount() {
        let db = firebase.firestore()
        db.collection('forms').onSnapshot(e => {
            this.setState({
                count: e.docs.length
            })
        })
    }

    updateForm(field, value) {
        let data = update(this.state.data, {
            [field]: {
                $set: value
            }
        })
        this.setState({ data })
    }

    submit() {
        let form = document.getElementById('reg-form')
        let valid = form.reportValidity()
        if (!valid) return

        this.setState({ loading: true })

        let db = firebase.firestore()
        db.collection('forms').add(this.state.data).then(res => {
            this.setState({
                loading: false,
                data: {
                    name: '',
                    email: '',
                    occupation: 'Graphics Designer',
                    phone: '',
                    message: ''
                }
            })
            alert('Thanks for submitting!')
        }).catch(err => {
            this.setState({ loading: false })
        })
    }

    render() {
        return (
            <>
                <div className='container' style={{
                    maxWidth: '1170px',
                    margin: 'auto',
                    padding: '89px 20px 77px 20px'
                }}>
                    <div className='title'>Register Your Interest</div>
                    <div className='ml-3 mb-2 reg-count'>{this.state.count} persons have been registered</div>
                    <form id='reg-form'>
                        <div
                            style={{
                                borderRadius: '5px',
                                border: '#dedede solid 1px',
                                padding: '30px',
                            }}>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input
                                            className='form-control'
                                            placeholder='Name'
                                            value={this.state.data.name}
                                            required={true}
                                            onChange={e => {
                                                this.updateForm('name', e.target.value)
                                            }} />
                                    </div>
                                    <div className='col-md-6 occupation'>
                                        <select
                                            className='form-control'
                                            placeholder='Occupation'
                                            value={this.state.data.occupation}
                                            required={true}
                                            onChange={e => {
                                                this.updateForm('occupation', e.target.value)
                                            }}>
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
                                        <input
                                            className='form-control'
                                            type='email'
                                            value={this.state.data.email}
                                            placeholder='Email Address'
                                            required={true}
                                            onChange={e => {
                                                this.updateForm('email', e.target.value)
                                            }} />
                                    </div>
                                    <div className='col-md-6'>
                                        <input
                                            className='form-control contactno'
                                            type='phone'
                                            placeholder='Contact No'
                                            value={this.state.data.phone}
                                            required={true}
                                            onChange={e => {
                                                this.updateForm('phone', e.target.value)
                                            }} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <textarea
                                            className='form-control'
                                            placeholder='Message...'
                                            value={this.state.data.message}
                                            required={true}
                                            rows={3}
                                            onChange={e => {
                                                this.updateForm('message', e.target.value)
                                            }} />
                                    </div>
                                    <div className='col-md-6'>
                                    </div>
                                </div>
                                <AppButton
                                    className='mt-4'
                                    style={{ maxWidth: '330px' }}
                                    loading={this.state.loading}
                                    disabled={this.state.loading}
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
                    .reg-count {
                        font-size: 13px;
                        font-style: italic;
                    }
                `}</style>
            </>
        )
    }
}
