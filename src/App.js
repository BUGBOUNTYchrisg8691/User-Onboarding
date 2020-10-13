import React, {useState} from 'react'

import Form from "./components/Form"

const { v4: uuidv4 } = require('uuid')

export default function App() {
    const [users, setUsers] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const getFormValues = e => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
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
    }

    return (
        <div>
            <Form getFormValues={getFormValues} formSubmit={formSubmit} />
        </div>
    )
}
