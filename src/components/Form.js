import React, {useState, useEffect} from 'react'

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
    const {formValues, update, submit, disabled, errors} = props
    const availableRoles = ["Instructor", "Student", "Team Lead"]
    
    return (
        <StyledDiv>
            <form onSubmit={submit}>
                <label 
                    className="label"
                    htmlFor="user"
                >Username
                <input
                    className="input"
                    id="inputName"
                    name="user"
                    value={formValues.user}
                    maxLength="30"
                    placeholder="Name"
                    type="text"
                    onChange={update}
                /></label>
                {formValues.user.length > 0 && <div>{errors.user}</div>}
                <hr />
                <label
                    className="label"
                    htmlFor="email"
                >Email
                <input
                    className="input"
                    id="inputEmail"
                    name="email"
                    value={formValues.email}
                    maxLength="30"
                    placeholder="Email"
                    type="text"
                    onChange={update}
                /></label>
                {formValues.email.length > 0 && <div>{errors.email}</div>}
                <hr />
                <label
                    className="label"
                    htmlFor="role"
                >Role
                <select
                    className="dropdown"
                    id="roleDropdown"
                    name="role"
                    value={formValues.role} 
                    onChange={update}
                >
                    <option value="">---Select Role---</option>
                    {availableRoles.map(role => {
                        return (
                            <option value={role.toLowerCase()}>{role}</option>
                        )
                    })}
                </select>
                </label>
                <hr />
                <label
                    className="label"
                    htmlFor="password"
                >Password
                <input
                    className="input"
                    id="inputPassword"
                    name="password"
                    value={formValues.password}
                    maxLength="30"
                    placeholder="Password"
                    type="password"
                    onChange={update}
                /></label>
                {formValues.password.length > 0 && <div>{errors.password}</div> }
                <hr />
                <label
                    className="label"
                    htmlFor="terms"
                >Terms of Service
                <input
                    className="checkbox"
                    id="termsCheckbox"
                    name="terms"
                    checked={formValues.terms}
                    type="checkbox"
                    onChange={update}
                /></label>
                <div>{errors.terms}</div>
                <button disabled={disabled}>Submit</button>
                {/* <input
                    className="submit-btn"
                    id="submit"
                    type="submit"
                    disabled={disabled}
                /> */}
            </form>
        </StyledDiv>
    )
}
