import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, done, text, onChange, onDelete }) => {
    return (
        <li className={`list-item${done ? ' list-item__done' : ''}`}>
            <input
                type='checkbox'
                className='list-item__checkbox'
                checked={done}
                onChange={() => onChange(id)}
            />
            {text}
            <button
                className='list-item__delete-btn'
                onClick={() => onDelete(id)}
            ></button>
        </li>
    );
};

Task.propTypes = {
    id: PropTypes.string.isRequired,
    done: PropTypes.bool,
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
    done: false,
    text: '',
};

export default Task;
