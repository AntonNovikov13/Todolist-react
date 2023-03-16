import React from 'react';
import PropTypes from 'prop-types';

const ActiveTaskCounter = ({ activeTasks }) => {
    return (
        <div className='amount-tasks'>
            {activeTasks.length > 0 && (
                <p className='amount-tasks_content'>
                    Active tasks - {activeTasks.length}
                </p>
            )}
        </div>
    );
};

ActiveTaskCounter.propTypes = {
    activeTasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            done: PropTypes.bool,
            id: PropTypes.string,
        })
    ).isRequired,
};

export default ActiveTaskCounter;
