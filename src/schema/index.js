import * as yup from "yup"

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

export default schema