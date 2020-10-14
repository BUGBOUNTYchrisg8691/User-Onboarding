import React, {useState, useEffect} from 'react'
import * as yup from "yup"

import Form from "./components/Form"

const { v4: uuidv4 } = require('uuid')

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Please include you full name")
        .label("name"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Must include a valid email email address")
        .label("email"),
    password: yup
        .string()
        .min(6, "Must be at least 6 characters long")
        .required("A password is required")
        .label("password"),
    terms: yup
        .boolean()
        .label("terms")
        .oneOf([true], "You must agree to Terms of Service")
})

export default function App() {
    const initialFormValues = {
        name: '',
        email: '',
        password: '',
        terms: ''
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
