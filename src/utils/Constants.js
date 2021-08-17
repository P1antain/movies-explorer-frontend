import * as yup from "yup";

export const schemaRegister = yup.object().shape({
    name: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
});
export const schemaLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
});
