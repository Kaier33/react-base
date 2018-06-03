import * as types from '../constants'

export const addReminder = (text, dueTime) => {
    return {
        type: types.ADD_REMINDER,
        text,
        dueTime
    }
}

export const deleteReminder = (id) => {
    return {
        type: types.DELETE_REMINDER,
        id
    }
}

export const clearReminders = () => {
    return {
        type: types.CLEAR_REMINDERS,
    }
}

