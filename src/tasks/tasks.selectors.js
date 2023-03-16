import { createSelector } from 'reselect';

export const tasksListSelector = (state) => state.tasks.tasksList;

export const activeTasksSelector = createSelector(
    [tasksListSelector],
    (tasks) => {
        return tasks.filter((task) => task.done === false);
    }
);

export const sortedTasksListSelector = createSelector(
    [tasksListSelector],
    (tasksList) => {
        return tasksList.slice().sort((a, b) => a.done - b.done);
    }
);
