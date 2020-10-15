import * as yup from "yup"

const schema = yup.object().shape({
    user: yup
        .string()
        .required("Please include you full name")
        .label("name"),
    email: yup
        .string()
        .test("waffle@syrup.com test", "Email already exists", value => {
            if (value === "waffle@syrup.com") {
                return false
            }
            return true
        })
        .email("Must be a valid email address")
        .required("Must include a valid email email address")
        .label("email"),
    password: yup
        .string()
        .min(6, "Must be at least 6 characters long")
        .required("A password is required")
        .label("password"),
    role: yup
        .string()
        .required("Must select role")
        .oneOf(["instructor", "alumni", "student", "team lead"])
        .label("role"),
    terms: yup
        .boolean()
        .label("terms")
        .oneOf([true], "You must agree to Terms of Service")
        .label("terms")
})

export default schema