import React, { Component } from 'react';
import Record from './record';
import RecordForm from './recordform';
import AmountBox from './amountBox'
import * as recordApi from '../utils/recordAPI'

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      error: null,
      isLoaded: false,
    }
  }

  componentDidMount() {
    recordApi.getAll().then(
      response => {
        this.setState({
          isLoaded: true,
          records: response.data
        })
      }
    ).catch(
      error => {
        this.setState({
          isLoaded: false,
          error
        })

      }
    )
  }

  // add 
  handleAddRecord(record) {
    this.setState({
      records: [...this.state.records, record],
      error: null,
      isLoaded: true,
    })
  }

  //updata
  upDataRecord(newRecord, oldRecord) {
    const upDataRecordIndex = this.state.records.indexOf(oldRecord);
    const newRecords = this.state.records.map((item, index) => {
      if (upDataRecordIndex !== index) {
        return item
      } else {
        return {
          ...item,
          ...newRecord
        }
      }
    })
    this.setState({
      records: newRecords
    })
  }

  //del
  deleteItem(delRecord) {
    const delIndex = this.state.records.indexOf(delRecord);
    const newRecords = this.state.records.filter((item, index) => {
      return index !== delIndex
    })
    this.setState({
      records: newRecords
    })
  }

  //credit
  credit() {
    const credits = this.state.records.filter(item => { return item.amount >= 0 })
    return credits.reduce((prev, curr) => {
      return prev + Number.parseInt(curr.amount, 0)
    }, 0)
  }

  //debit
  debit() {
    const debits = this.state.records.filter(item => { return item.amount < 0 })
    return debits.reduce((prev, curr) => {
      return prev + Number.parseInt(curr.amount, 0)
    }, 0)
  }

  balance(){
    return this.credit()+this.debit()
  }


  render() {
    const { error, isLoaded, records } = this.state;
    let recordcCmponent;
    if (error) {
      recordcCmponent = <div>ERROR:{error.message}</div>;
    } else if (!isLoaded) {
      recordcCmponent = <div>loading...</div>;
    } else {
      recordcCmponent =
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item, i) => {
                return (
                  <Record
                    record={item}
                    key={item.id}
                    handleUpdata={this.upDataRecord.bind(this)}
                    handleDelete={this.deleteItem.bind(this)}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
    }
    return (
      <div className='container'>
        <h1>Records</h1>
        <div className='row mb-3'>
          <AmountBox header='credit' bg='success' amount={this.credit()} />
          <AmountBox header='debit' bg='danger' amount={this.debit()} />
          <AmountBox header='balance' bg='primary' amount={this.balance()} />
        </div>

        <RecordForm handleAddRecord={this.handleAddRecord.bind(this)} />
        {recordcCmponent}
      </div>

    )

  }
}

export default Records;
