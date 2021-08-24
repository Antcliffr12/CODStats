import React from 'react'

function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <input
                className="form-control"
                id={props.name}
                name={props.name}
                type={props.input}
                value={props.value}
                onChange={props.handlechange}
                {...props}
            />
        </div>
    )
}

export default Input
