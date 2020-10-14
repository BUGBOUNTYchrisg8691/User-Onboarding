import React, {useState, useEffect} from 'react'

import * as yup from "yup"
import schema from "./schema"

import Form from "./components/Form"

const { v4: uuidv4 } = require('uuid')

export default function App() {
    const initialFormValues = {
        name: '',
        email: '',
        password: '',
        terms: false
    }
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    })

    const getFormValues = e => {
        const {name, value, checked, type} = e.target
        const newValue = type === "checkbox" ? checked : value
        handleSetErrors(name, value)
        setFormData({
            ...formData,
            [name]: newValue
        })
    }

    const formSubmit = e => {
        e.preventDefault()
        setUsers([
            ...users,
            {
                ...formData,
                id: uuidv4()
            }
        ])
        setFormData(initialFormValues)
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
        schema.isValid(formData)
            .then(valid => {
                setDisabled(!valid)
            })
            .catch(err => console.log(err))
    }, [formData])

    return (
        <div>
            <Form formData={formData} update={getFormValues} submit={formSubmit} disabled={disabled} errors={errors} />
        </div>
    )
}
