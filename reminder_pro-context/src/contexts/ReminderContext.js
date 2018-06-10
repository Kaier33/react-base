import React, { Component } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';
export const ReminderContext = React.createContext();

export class ReminderProvider extends Component {
    state = {
        reminders: read_cookie('reminders') || []
    }

    addReminder = (text, dueTime) => {
        let reminders = [];
        reminders = [
            ...this.state.reminders,
            { id: Math.random(), text, dueTime }
        ];
        this.setState({
            reminders: reminders
        });
        bake_cookie("reminders", reminders);
    }

    deleteReminder = (id) => {
        let reminders = [];
        reminders = this.state.reminders.filter(reminder => reminder.id !== id);
        this.setState({
            reminders: reminders
        });
        bake_cookie("reminders", reminders);
    }

    clearReminders = () => {
        this.setState({
            reminders: []
        });
        bake_cookie("reminders", []);
    }

    render() {
        return (
            <ReminderContext.Provider
                value={{
                    reminders: this.state.reminders,
                    addReminder: this.addReminder,
                    deleteReminder: this.deleteReminder,
                    clearReminders: this.clearReminders
                }}
            >
                {this.props.children}
            </ReminderContext.Provider>
        );
    }

}