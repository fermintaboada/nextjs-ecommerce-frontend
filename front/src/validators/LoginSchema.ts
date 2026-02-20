import * as Yup from "yup";

export interface LoginFormValuesInterface {
    email: string;
    password: string;
}

export const initialValuesLogin: LoginFormValuesInterface = {
    email: "",
    password: "",
};

const LIMITS = {
    email: 254,
    password: 64,
};

export const loginValidationSchema = Yup.object({
email: Yup.string()
    .trim()
    .max(LIMITS.email, `El correo no puede superar ${LIMITS.email} caracteres`)
    .required("El correo electrónico es obligatorio."),
password: Yup.string()
    .max(LIMITS.password, `La contraseña no puede superar ${LIMITS.password} caracteres.`)
    .required("La contraseña es obligatoria."),
});
