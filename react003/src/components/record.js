import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as recordApi from '../utils/recordAPI'

class Record extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false
        }
    }
    handleToggle() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    handleEdit(event) {
        event.preventDefault()
        const newRecord = {
            title: this.refs.title.value,
            date: this.refs.date.value,
            amount: Number.parseInt(this.refs.amount.value, 10)
        }

        recordApi.updataRecord(this.props.record.id, newRecord).then(
            res => {
                this.props.handleUpdata(res.data, this.props.record)
                this.setState({
                    isEdit: !this.state.isEdit
                })
            }
        ).catch(
            err => console.log(err)
        )
    }

    handleDel(event) {
        event.preventDefault()
        recordApi.deleteRecord(this.props.record.id).then(
            res => {
                this.props.handleDelete(this.props.record)
            }
           
        ).catch(
            err => console.log(err)
        )
    }

    render() {
        const display = (
            <tr>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{this.props.record.amount}</td>
                <td>
                    <button className='btn btn-info mr-1' onClick={this.handleToggle.bind(this)} >Edit</button>
                    <button className='btn btn-danger' onClick={this.handleDel.bind(this)} >Delete</button>
                </td>
            </tr>)

        const editStatus = (
            <tr>
                <td><input type="text" className="form-control" defaultValue={this.props.record.date} ref='date' /></td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.title} ref='title' /></td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.amount} ref='amount' /></td>
                <td>
                    <button className='btn btn-info mr-1' onClick={this.handleEdit.bind(this)} >Update</button>
                    <button className='btn btn-danger' onClick={this.handleToggle.bind(this)} >Cancel</button>
                </td>
            </tr>
        )

        if (this.state.isEdit) {
            return editStatus
        } else {
            return display
        }
    }
}

Record.propTypes = {
    record: PropTypes.object
}

export default Record;
