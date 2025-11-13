import * as Yup from 'yup';

export interface RegisterFormValuesInterface {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    address: string;
    phone: string;
}

export const initialValuesRegister: RegisterFormValuesInterface = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    address: '',
    phone: '',
};

export const registerValidationSchema = Yup.object({
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es obligatorio'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es obligatoria'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Las contraseñas np coinciden")
        .required('La confirmación de la contraseña es obligatoria'),
    name: Yup.string()
        .required('El nombre es obligatorio'),
    address: Yup.string()
        .required('La dirección es obligatoria'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'El teléfono solo debe contener números y caracteres validos ')
        .required('El teléfono es obligatorio'),
})