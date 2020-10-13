import React from 'react'

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

export default function Form() {
    return (
        <StyledDiv>
            <form>
                <label 
                    className="label"
                    htmlFor="name"
                >Name</label>
                <input
                    className="input"
                    id="inputName"
                    name="name"
                    maxLength="30"
                    placeholder="Name"
                    type="text"
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
                    maxLength="30"
                    placeholder="Email"
                    type="text"
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
                    maxLength="30"
                    placeholder="Password"
                    type="text"
                />
                <hr />
                <label
                    className="label"
                    htmlFor="termsOfService"
                >Terms of Service</label>
                <input
                    className="checkbox"
                    id="termsCheckbox"
                    name="termsOfService"
                    value="agree"
                    type="checkbox"
                />
                <input
                    className="submit-btn"
                    id="submit"
                    type="submit"
                />
            </form>
        </StyledDiv>
    )
}
