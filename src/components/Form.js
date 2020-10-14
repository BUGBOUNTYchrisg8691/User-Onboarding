import React, {useState, useEffect} from 'react'
import * as yup from "yup"

import styled from "styled-components"

const StyledDiv = styled.div`
    border: 1px dashed ${props => props.theme.black};
    padding: 10px 5px 0;
    width: 250px;
    clear: both;
    .input {
        width: 100%;
        clear: both;
        margin: 10px 0 0;
    }
    label {
        margin: 20px 5px;
    }
    form * {
        vertical-align: middle;
    }
    hr {
        border: 1px dashed ${props => props.theme.black};
    }
    button {
        margin: 10px 0 0;
        padding: 2px 5px;
    }
`

export default function Form(props) {
    const {formData, update, submit, disabled, errors} = props
    // const handleUpdate = e => {
    //     update(e) 
    // }

    // const handleSubmit = e => {
    //     e.preventDefualt()
    //     submit()
    // }
    
    return (
        <StyledDiv>
            <form onSubmit={submit}>
                <label 
                    className="label"
                    htmlFor="name"
                >Name</label>
                <input
                    className="input"
                    id="inputName"
                    name="name"
                    value={formData.name}
                    maxLength="30"
                    placeholder="Name"
                    type="text"
                    onChange={update}
                />
                <hr />
                <label
                    className="label"
                    htmlFor="email"
                >Email</label>
                <input
                    className="input"
                    id="inputEmail"
                    name="email"
                    value={formData.email}
                    maxLength="30"
                    placeholder="Email"
                    type="text"
                    onChange={update}
                />
                <hr />
                <label
                    className="label"
                    htmlFor="password"
                >Password</label>
                <input
                    className="input"
                    id="inputPassword"
                    name="password"
                    value={formData.password}
                    maxLength="30"
                    placeholder="Password"
                    type="text"
                    onChange={update}
                />
                <hr />
                <label
                    className="label"
                    htmlFor="termsOfService"
                >Terms of Service</label>
                <input
                    className="checkbox"
                    id="termsCheckbox"
                    name="terms"
                    type="checkbox"
                    onChange={update}
                />
                <input
                    className="submit-btn"
                    id="submit"
                    type="submit"
                    disabled={disabled}
                />
            </form>
        </StyledDiv>
    )
}
