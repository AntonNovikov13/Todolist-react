const baseUrl = 'https://63b875bc6f4d5660c6d7280e.mockapi.io/api/v1/tasks';

export const createTask = async (taskData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) {
        throw new Error('Failed to create task');
    }
};

export const updateTask = async (taskId, taskData) => {
    const response = await fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) {
        throw new Error('Failed to update task');
    }
};

export const deleteTask = async (taskId) => {
    const response = await fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete task');
    }
};

export const fetchTasksList = async () => {
    const response = await fetch(baseUrl);
    if (response.ok) {
        return response.json();
    }
};
