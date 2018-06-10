import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueTime: '',
    }
  }

  addReminder() {  // 去触发dispatch
    this.props.addReminder(this.state.text, this.state.dueTime);
    this.textInput.value="";
    this.dateInput.value="";
  }

  deleteReminder(id){
    this.props.deleteReminder(id)
  }

  clearReminders(){
    this.props.clearReminders()
  }


  renderReminders() {
    const { reminders } = this.props;  // reducer中的state已经在下方写入到this.props中去了. mapStateToProps
    return (
      <ul className='list-group col-sm-8 mt-2'>
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className='list-group-item'>
                <div className='list-item'>
                  <div> {reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueTime)).fromNow()}</em></div>
                </div>
                <div
                  className='list-item delete-button'
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>

        <div className="form-inline">
          <div className="form-group mr-2">

            <input
              type="text"
              className='form-control mr-2'
              placeholder='I have to ...'
              ref={(textInput)=>{this.textInput=textInput}}
              onChange={(event) => this.setState({ text: event.target.value })}
            />

            <input
              type="datetime-local"
              className='form-control'
              ref={(dateInput)=>{this.dateInput=dateInput}}
              onChange={(event) => this.setState({ dueTime: event.target.value })}
            />

          </div>
          <button
            type='button'
            className='btn btn-success'
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>

        </div>
        {this.renderReminders()}
        <div
          className='btn btn-danger mt-3'
          onClick={() => this.clearReminders()}
        >
          clear reminders
        </div>
      </div>
    );
  }
}


export default App;
