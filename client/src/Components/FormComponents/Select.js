import React from 'react'

export default function Select(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.title}</label>
            <select
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handlechange}
                className="form-control"
            >
                <option value="" disabled>
                    {props.placeholder}
                </option>
                {props.options.map(option => {
                    return (
                        <option key={option.value} value={option.value} label={option.label}>
                            {option.label}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
