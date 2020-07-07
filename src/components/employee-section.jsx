import React, { Component } from 'react'
import { COLOR_BLACK, COLOR_GREEN, COLOR_GREY } from '../utils'
import AppButton from './app-button'

export default class EmployeeSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                {
                    name: 'alexis simpson',
                    title: 'CEO & Developer',
                    email: 'simpson@unique.com',
                    contactNumber: '+60191234567',
                    photo: '/images/emp1.jpg',
                },
                {
                    name: 'steven cole',
                    title: 'User Interface Designer',
                    email: 'steven@unique.com',
                    contactNumber: '+60191234567',
                    photo: '/images/emp2.jpg',
                },
                {
                    name: 'Frank piener',
                    title: 'Sales Manager',
                    email: 'frank@unique.com',
                    contactNumber: '+60191234567',
                    photo: '/images/emp3.jpg',
                },
                {
                    name: 'ashley lennon',
                    title: 'IT Specialist',
                    email: 'ashley@unique.com',
                    contactNumber: '+60191234567',
                    photo: '/images/emp4.jpg',
                },
            ]
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: COLOR_BLACK, padding: '63px 0 136px 0' }}>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {this.state.employees.map((item, index) =>
                            <EmployeeItem key={item.name} emp={item} />
                        )}
                    </div>
                    <div className='pr-3 pl-3'>
                        <AppButton
                            className='mr-auto ml-auto'
                            style={{ marginTop: '30px', maxWidth: '500px', }}>
                            VIEW ALL WORKS
                        </AppButton>
                    </div>
                </div>
            </div>
        )
    }
}


class EmployeeItem extends Component {
    renderIconInfoField(icon, text) {
        return (
            <div className='row align-items-center justify-content-center pt-2'>
                <i className={`${icon} mr-2`} />
                <span>{text}</span>
            </div>
        )
    }

    render() {
        return (
            <div
                className={`m-3 ${this.props.className}`}
                style={{
                    width: '270px',
                    border: '#dedede solid 0.5px',
                    borderRadius: '3px'
                }}>
                <div style={{ backgroundColor: '#8b8b8b', height: '270px' }}>
                    <img
                        style={{ width: '268px', height: '270px', objectFit: 'cover', borderTopLeftRadius: '3px', borderTopRightRadius: '3px' }}
                        src={this.props.emp.photo} />
                </div>
                <div style={{ backgroundColor: COLOR_BLACK, height: '140px' }}>
                    <div className='emp-info'>
                        <div className='emp-name'>{this.props.emp.name.toUpperCase()}</div>
                        <div className='emp-title'>{this.props.emp.title}</div>
                        <hr style={{ width: '100px', backgroundColor: 'white', margin: '10px auto' }} />
                        {this.renderIconInfoField('fa fa-envelope', this.props.emp.email)}
                        {this.renderIconInfoField('fa fa-phone', this.props.emp.contactNumber)}
                    </div>

                </div>

                <style jsx>{`
                    .emp-name {
                        background-color: ${COLOR_GREEN};
                        width: 136px;
                        height: 40px;
                        margin: auto;
                        left: 0;
                        right: 0;
                        border-radius: 4px;
                        color: #e4e4e4;
                        font-size: 13px;
                        font-weight: 800;
                        text-align: center;
                        line-height: 40px;
                    }
                    .emp-info {
                        color: #8b8b8b;
                        font-size: 13px;
                        position: relative;
                        bottom: 20px;
                    }
                    .emp-title {
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 1.83;
                        text-align: center;
                        color: #606060;
                        padding-top: 10px;
                    }
                `}</style>
            </div>
        )
    }
}
