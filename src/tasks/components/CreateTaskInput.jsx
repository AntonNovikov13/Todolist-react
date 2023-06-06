import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends Component {
    state = {
        value: '',
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    handleCreate = (e) => {
        e.preventDefault()
        this.props.onCreate(
            this.state.value.length <= 0 || this.state.value === ''
                ? this.setState({
                      value: '',
                  })
                : this.state.value
        );

        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <form className='create-task'>
                <input
                    type='text'
                    className='create-task__input'
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <button
                    className='btn create-task__btn'
                    onClick={this.handleCreate}
                >
                    Create
                </button>
            </form>
        );
    }
}

CreateTaskInput.propTypes = {
    onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
