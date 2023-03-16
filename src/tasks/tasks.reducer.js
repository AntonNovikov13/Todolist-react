import { TASKS_LIST_RECIEVED } from './tasks.actions';

const initialData = {
    tasksList: [],
};

const tasksReducer = (state = initialData, action) => {
    switch (action.type) {
        case TASKS_LIST_RECIEVED:
            return {
                ...state,
                tasksList: action.payload.tasksList,
            };
        default:
            return state;
    }
};

export default tasksReducer;
