import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { ReminderContext, ReminderProvider } from './contexts/ReminderContext';


ReactDOM.render(
    <ReminderProvider>
        <ReminderContext.Consumer>
            {
                ({ reminders, clearReminders, addReminder, deleteReminder }) =>
                    (<App
                        clearReminders={clearReminders}
                        deleteReminder={deleteReminder}
                        addReminder={addReminder}
                        reminders={reminders} />)
            }
        </ReminderContext.Consumer>
    </ReminderProvider>,
    document.getElementById('root')
);
registerServiceWorker();
