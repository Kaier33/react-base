import React, { Component } from 'react';
import * as recordApi from '../utils/recordAPI'

class RecordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: '',
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const body = { ...this.state };
        body.amount = Number.parseInt(body.amount, 10);
        recordApi.addRecord({ ...body }).then(
            res => {
                this.setState({
                    title:'',
                    date:'',
                    amount:''
                })
                this.props.handleAddRecord(res.data);
            }
        ).catch(
            err => console.log(err)
        )
    }



    valid() {
        return this.state.title && this.state.date && this.state.amount
    }

    render() {
        return (
            <form className='form-inline mb-3' onSubmit={this.handleSubmit.bind(this)} >

                <div className="form-group mr-1" >
                    <input type="text" className='form-control' placeholder='Date' name='date' value={this.state.date} onChange={this.handleChange} autoComplete='off' />
                </div>

                <div className="form-group mr-1">
                    <input type="text" className='form-control' placeholder='title' name='title' value={this.state.title} onChange={this.handleChange} autoComplete='off' />
                </div>

                <div className="form-group mr-1">
                    <input type="text" className='form-control' placeholder='amount' name='amount' value={this.state.amount} onChange={this.handleChange} autoComplete='off' />
                </div>

                <div className='mr-1'>
                    <input type='submit' className='btn btn-primary' disabled={!this.valid()} value='create record' />
                </div>

            </form>
        );
    }
}


export default RecordForm;
