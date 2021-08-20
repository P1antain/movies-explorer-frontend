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
export const schemaEdit = yup.object().shape({
    name: yup.string().min(5).required(),
    email: yup.string().email().required(),
});
export const schemaSearch = yup.object().shape({
    search: yup.string().required(),
    checkbox:yup.boolean(),
});
