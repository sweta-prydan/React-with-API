import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const[pwd,setPassword] = useState('');

const handle = ()  => {
    localStorage.setItem('Name',name);
    localStorage.setItem('Password',pwd);
};

    return (
        <>
            <div>Form</div>
            <form
            // onSubmit={formSubmitHandler}
            >
                <form label="Name">
                    <input
                        id="name"
                        value={name}
                        type="text"
                        onChange={ (e) => setName(e.target.value)}>
                    </input>
                    <br/>
                    <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPassword(e.target.value)}/>
                </form>
                <button text="Submit"
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={handle}
                // onChange={onChange}
                >Submit</button>

            </form>
        </>
    );
}
