import React from 'react';

const InputForm = (props) => {

    return (
        <div>
            <input
                onBlur={e=>props.forOnBlur(e)}
                name={props.name}
                value={props.value}
                onChange={e=>props.setValue(e.target.value)}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default InputForm;