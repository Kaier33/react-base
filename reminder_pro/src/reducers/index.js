import * as types from '../constants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'



const reminder = (acitons) => {
    const { text, dueTime } = acitons;
    return {
        id: Math.random(),
        text,
        dueTime
    }
}

const reminders = (state = read_cookie("reminders") || [], action) => {
    let reminders = null;
    switch (action.type) {
        case types.ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie("reminders", reminders);
            return reminders;
        case types.DELETE_REMINDER:
            reminders = state.filter(reminder => reminder.id !== action.id);
            bake_cookie("reminders", reminders);
            return reminders
        case types.CLEAR_REMINDERS:
            reminders = [];
            delete_cookie("reminders");
            return reminders;
        default: return state;
    }
};

export default reminders