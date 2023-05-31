import React from 'react';

const Form = (props) => {
    return (
        <div>
            <h1>My Cool Form</h1>
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={onChange}
                    />
            </form>
        </div>
    )
}

export default Form;