import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ActiveTaskCounter from './ActiveTaskCounter.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import TasksList from './TasksList.jsx';
import * as tasksAction from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';
import { activeTasksSelector } from '../tasks.selectors';

const TodoList = () => {
    const tasks = useSelector((state) => sortedTasksListSelector(state));
    const activeTasks = useSelector((state) => activeTasksSelector(state));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tasksAction.getTaskList());
    }, [dispatch]);

    const createTask = (text) => {
        dispatch(tasksAction.createTask(text));
    };

    const updateTask = (taskId) => {
        dispatch(tasksAction.updateTask(taskId));
    };

    const deleteTask = (taskId) => {
        dispatch(tasksAction.deleteTask(taskId));
    };

    return (
        <>
            <h1 className='title'>Todo List</h1>
            <main className='todo-list'>
                <ActiveTaskCounter activeTasks={activeTasks} />
                <CreateTaskInput onCreate={createTask} />
                <TasksList
                    tasks={tasks}
                    handleTaskStatusChange={updateTask}
                    handleTaskDelete={deleteTask}
                />
            </main>
        </>
    );
};

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    activeTasks: PropTypes.arrayOf(PropTypes.shape()),
    getTaskList: PropTypes.func,
    createTask: PropTypes.func,
    updateTask: PropTypes.func,
    deleteTask: PropTypes.func,
};

export default TodoList;
