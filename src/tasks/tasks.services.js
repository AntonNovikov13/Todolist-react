const baseUrl = 'https://63b875bc6f4d5660c6d7280e.mockapi.io/api/v1/tasks';

export const createTask = (taskData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
    });
};

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to update task');
        }
    });
};

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
    });
};

export const fetchTasksList = () => {
    return fetch(baseUrl).then((response) => {
        if (response.ok) {
            return response.json();
        }
    });
};
