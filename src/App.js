import React, {useState, useEffect} from 'react'
import axios from "axios"

import * as yup from "yup"
import schema from "./schema"

import Form from "./components/Form"

import { v4 as uuid } from "uuid"

export default function App() {
    const initialFormValues = {
        user: "",
        email: "",
        password: "",
        role: "",
        terms: false,
        id: uuid()
    }

    const [users, setUsers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({
        user: "",
        email: "",
        password: "",
        role: "",
        terms: ""
    })

    const getFormValues = e => {
        const {name, value, checked, type} = e.target
        const newValue = type === "checkbox" ? checked : value
        handleSetErrors(name, newValue)
        setFormValues({
            ...formValues,
            [name]: newValue
        })
    }

    // const formSubmit = e => {
    //     e.preventDefault()
    //     setUsers([
    //         ...users,
    //         {
    //             ...formValues,
    //             id: uuidv4()
    //         }
    //     ])
    //     setFormValues(initialFormValues)
    // }

    const formSubmit = e => {
        e.preventDefault()
        const newUser = {
            user: formValues.user.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim()
        }
        axios.post("https://reqres.in/api/users", newUser)
            .then(resp => {
                setUsers([...users, resp.data])
                setFormValues(initialFormValues)
            })
            .catch(err => console.log(err))
    }

    const handleSetErrors = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setErrors({
                    ...errors,
                    [name]: ""
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [name]: err.errors[0]
                })
            })
    }

    useEffect(() => {
        schema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid)
            })
            .catch(err => console.log(err))
    }, [formValues])

    return (
        <div>
            <Form formValues={formValues} update={getFormValues} submit={formSubmit} disabled={disabled} errors={errors} />
            {users.length === 0 ? null : <pre>{JSON.stringify(users)}</pre>}
        </div>
    )
}
